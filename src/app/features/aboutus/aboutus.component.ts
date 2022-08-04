import { Component, OnInit } from '@angular/core';
import { MessageService, TreeNode } from 'primeng';
import { NodeService } from './nodeservice';
import * as exampleData from '../../../assets/files.json';
import * as clubs from '../../../assets/clubs.json';

@Component({
  selector: 'app-aboutus',
  templateUrl: 'aboutus.component.html',
  styleUrls: ['aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  files1: TreeNode[];

  files2: TreeNode[];

  files3: TreeNode[];

  selectedFile: TreeNode;

  selectedFiles1: TreeNode;

  selectedFiles2: TreeNode;
  toastService: any;
  clubs = [];
  currentTeam:any ={
    correspondence:{},
    mainEquipment:{}
  };

  constructor(
    private nodeService: NodeService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.nodeService.getAll('http://localhost:4800/api/v1/scrapper/categories').subscribe(response => {
      this.files3 = <TreeNode[]>this.convertToTree(response);
      this.clubs = clubs;
    });
  }

  convertToTree(data) {
    for (let item of data) {
      item.data = item.name;
      item.expandedIcon = "pi pi-folder-open";
      item.collapsedIcon = "pi pi-folder";
      item.children = item.groupCompetitions;
      for (let child of item.children) {
        child.data = child.name;
        child.label = child.name;
        child.expandedIcon = "pi pi-chevron-circle-up";
        child.collapsedIcon = "pi pi-chevron-circle-down";
        child.children = child.competitions;
        for (let child2 of child.children) {
          child2.data = child2.name;
          child2.label = child2.name;
          child2.expandedIcon = "pi pi-folder-open";
          child2.collapsedIcon = "pi pi-folder";
          child2.children = child2.groups;
          for (let child3 of child2.children) {
            child3.data = child3.name;
            child3.label = child3.name;
            child3.isGroup = true;
            child3.expandedIcon = "pi pi-chevron-circle-up";
            child3.collapsedIcon = "pi pi-chevron-circle-down";
            child3.matches = child3.matches
            // for (let child4 of child3.children) {
            //   child4.data = child4.date;
            //   child4.label = child4.date;
            //   child4.categoryInfo = child3.categoryInfo;
            //   child3.expandedIcon = "pi pi-folder-open";
            //   child3.collapsedIcon = "pi pi-folder";
            // }
          }
        }
      }
    }

    console.log(data);

    return data;
  }

  

  nodeSelect(event) {
    console.log('node selected');
    console.log(event.node.categoryInfo);
    


    if(event.node.type === 'team'){
      this.nodeService.get('http://localhost:4800/api/v1/scrapper/teams/detail', {url : event.node.url}).subscribe(response => {
        let nodeChilds = [];
        console.log(response);

        this.currentTeam =response;
        // response.map(x => {
        //   nodeChilds.push({
        //     data: x['name'],
        //     label: x['name'],
        //     url: x['url'],
        //     expandedIcon: "pi pi-chevron-circle-up",
        //     collapsedIcon: "pi pi-chevron-circle-down",
        //     type:'team'
        //   })
        // })
        // event.node.children = nodeChilds;
      })
    }
    if (!event.node.isGroup) return;
    var match = event.node.matches[0];
    let requestBody = { ...event.node.categoryInfo, matchId: match.id };

    this.nodeService.get('http://localhost:4800/api/v1/scrapper/teams', requestBody).subscribe(response => {
      let nodeChilds = [];
      console.log(response);
      response.map(x => {
        nodeChilds.push({
          data: x['name'],
          label: x['name'],
          url: x['url'],
          expandedIcon: "pi pi-chevron-circle-up",
          collapsedIcon: "pi pi-chevron-circle-down",
          type:'team'
        })
      })
      event.node.children = nodeChilds;
    })
    //seasonId, typeId, competitionId, groupId, matchId 
    // const 
    this.messageService.add({
      severity: 'info',
      summary: 'Node Selected',
      detail: event.node.label,
    });
  }

  nodeUnselect(event) {
    this.messageService.add({
      severity: 'info',
      summary: 'Node Unselected',
      detail: event.node.label,
    });
  }

  confirm() {
    this.messageService.add({
      severity: 'success',
      summary: 'Informacion Guardada correctamente'
    });
  }

}
