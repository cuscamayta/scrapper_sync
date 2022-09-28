import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { FileService } from '../../services/fileService';

@Component({
  selector: 'app-valenciana',
  templateUrl: './valenciana.component.html',
  styleUrls: ['./valenciana.component.scss']
})
export class ValencianaComponent implements OnInit {

  constructor(private fileSystem: FileService) { }

  files1: TreeNode[];

  files2: TreeNode[];

  files3: TreeNode[];

  selectedFile: TreeNode;

  selectedFiles1: TreeNode;

  selectedFiles2: TreeNode;
  toastService: any;
  clubs = [];
  currentTeam: any = {
    correspondence: {},
    mainEquipment: {}
  };

  ngOnInit(): void {
    this.loadTypes();
  }

  types = [];

  loadTypes() {
    debugger;
    this.fileSystem.getTypes('valenciana').then(types => {
      this.types = types
      this.convertToTree(this.types);
    });    
  }

  convertToTree(data) {
    for (let item of data) {
      item.data = item.name;
      item.label = item.name;
      item.expandedIcon = "pi pi-folder-open";
      item.collapsedIcon = "pi pi-folder";
      item.children = item.competitions;
      for (let child of item.children) {
        child.data = child.name;
        child.label = child.name;
        child.expandedIcon = "pi pi-chevron-circle-up";
        child.collapsedIcon = "pi pi-chevron-circle-down";
        child.level = 'competition';
        child.children = child.groups;
        for (let child2 of child.children) {
          child2.data = child2.name;
          child2.label = child2.name;
          child2.expandedIcon = "pi pi-folder-open";
          child2.collapsedIcon = "pi pi-folder";
          child2.children = child2.groups;
          // for (let child3 of child2.children) {
          //   child3.data = child3.name;
          //   child3.label = child3.name;
          //   child3.level = 'group';
          //   child3.isGroup = true;
          //   child3.expandedIcon = "pi pi-chevron-circle-up";
          //   child3.collapsedIcon = "pi pi-chevron-circle-down";
          //   child3.children = child3.matches
          //   if (!child3) {
          //     console.log(child3);
          //   }
          //   for (let child4 of child3.children) {
          //     child4.data = child4.name;
          //     child4.label = child4.date;
          //     child4.level = 'journey';
          //   }
          // }
        }
      }
    }

    console.log(data);

    return data;
  }

}
