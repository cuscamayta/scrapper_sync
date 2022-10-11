import { Component, OnInit } from '@angular/core';
import { MessageService, TreeNode } from 'primeng/api';
import { FederationService } from '../../services/federation.service';
import * as madrid from '../../../../../assets/data/madrid.json';
// import * as clubs from '../../../../../assets/data/clubs.json';
import { FileService } from '../../services/fileService';
import { FBaseApiService } from '../../services/fbase-api.service';
import { LoaderService } from '../../services/loader.service';
import { delay } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { DialogModule } from 'primeng/dialog';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-madrid',
  templateUrl: './madrid.component.html',
  styleUrls: ['./madrid.component.scss']
})
export class MadridComponent implements OnInit {

  selectedFiles2: TreeNode;
  toastService: any;

  clubs = [];
  isClubsLoaded = false;
  types = [];

  displayPosition: boolean = false;
  position: string = 'bottom-right';
  displayContent: string = '';
  headerDisplay: string = '';

  currentTeam: any = {
    correspondence: {},
    mainEquipment: {}
  };

  showLoader = false;
  showLoader$ = this.loaderService.loadingSubject;

  constructor(
    private federationService: FederationService,
    private messageService: MessageService,
    private fileSystem: FileService,
    private fbaseApiService: FBaseApiService,
    private loaderService: LoaderService
  ) { }


  ngOnInit() {
    this.loadTypes();
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
        child.level = 'competition';
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
            child3.level = 'group';
            child3.isGroup = true;
            child3.expandedIcon = "pi pi-chevron-circle-up";
            child3.collapsedIcon = "pi pi-chevron-circle-down";
            child3.children = child3.matches
            if (!child3) {
              console.log(child3);
            }
            for (let child4 of child3.children) {
              child4.data = child4.name;
              child4.label = child4.date;
              child4.level = 'journey';
            }
          }
        }
      }
    }
    return data;
  }

  loadNodeTypeSelected(nodeName) {
    this.loadInformationByType(nodeName);
  }

  matchesInJourney = [];
  loadJourneySelected(information) {
    this.matchesInJourney = information;
  }

  nodeSelect(event) {
    switch (event.node.level) {
      case 'journey':
        this.loadJourneySelected(event.node.information);
        break;
    }
    return;

    if (event.node.type === 'team') {
      this.federationService.get('http://localhost:4800/api/v1/scrapper/teams/detail', { url: event.node.url }).subscribe(response => {
        let nodeChilds = [];
        console.log(response);

        this.currentTeam = response;
      })
    }
    if (!event.node.isGroup) return;
    var match = event.node.matches[0];
    let requestBody = { ...event.node.categoryInfo, matchId: match.id };

    this.federationService.get('http://localhost:4800/api/v1/scrapper/teams', requestBody).subscribe(response => {
      let nodeChilds = [];
      console.log(response);
      response.map(x => {
        nodeChilds.push({
          data: x['name'],
          label: x['name'],
          url: x['url'],
          expandedIcon: "pi pi-chevron-circle-up",
          collapsedIcon: "pi pi-chevron-circle-down",
          type: 'team'
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

  loadTypes() {
    this.fileSystem.getTypes('madrid').then(types => {
      this.types = types
      this.convertToTree(types);
    });
  }

  loadInformationByType(typeName) {
    this.fileSystem.getTypeInformation(typeName).then(typeData => {
      this.types.map(type => {
        if (type.name === typeName) {
          type.groupCompetitions = typeData['groupCompetitions'];
        }
      })
      this.convertToTree(this.types);
    });
  }

  loadClubs() {
    this.fileSystem.getClubs().then(clubs => {
      this.clubs = clubs;
      this.isClubsLoaded = true;
    });
  }

  loadDisplay(header: string, content: string) {
    this.loaderService.hideLoader()
    this.headerDisplay = header;
    this.displayContent = content
    this.displayPosition = true;
  }

  sendData(info) {
    console.log(info);
    if (info == undefined || info.length == 0) {
      this.loadDisplay(
        "Error al enviar datos de categoria.",
        `No ha seleccionado ninguna categoria.`
      );
      return
    }
    let categories = [];
    let resp = {};
    const journeys = info.filter((v: { level: string; }) => v.level == "journey");
    const journeysValidation = journeys.filter((j: { parent: any; }) => j.parent == undefined)
    this.loaderService.showLoader();

    
    if (journeysValidation.length && journeysValidation.length > 0) {
      this.loadDisplay(
        "Envio Fallido",
        `Debe desplegar las categorias hasta la mas minima expresión para evaluar que los datos que se enviarán esten correctos.`
      );
      return;
    }

    journeys.forEach(match => {
      const group = match.parent;
      const competition = match.parent.parent;
      const groupCompetitions = match.parent.parent.parent;
      const category = match.parent.parent.parent.parent;
      let indexCate = -1, indexGrComp = -1, indexComp = -1;

      const categoryCreated = categories.find((cat, index) => {
        if (cat.name === category.name) {
          indexCate = index;
          return true;
        }
        return false;
      });

      if (categoryCreated != undefined && categoryCreated.name == category.name) {
        let groupCompetitionsCreated = categoryCreated.groupCompetitions.find((gropuComp, index) => {
          if (gropuComp.name === groupCompetitions.data) {
            indexGrComp = index;
            return true;
          }
          return false;
        });
        console.log('Encontro o no el gropup competition dentro de Categories', indexGrComp, groupCompetitionsCreated);
        if (groupCompetitionsCreated != undefined && groupCompetitionsCreated.name == groupCompetitions.data) {
          let competitionsCreated = groupCompetitionsCreated.competitions.find((comp: { name: any; }, index: any) => {
            if (comp.name === competition.data) {
              indexComp = index;
              return true;
            }
            return false;
          })

          if (competitionsCreated != undefined && competitionsCreated.name == competition.data) {
            let groupsCreated = competitionsCreated.groups.find(groups => groups.name === group.data)

            if (groupsCreated != undefined && groupsCreated.name == group.data) {
              // TODO: add matches
            } else {
              // Crea el objeto y groupsCreated.push(objeto)
              groupsCreated = { "name": group.data };
              categories[indexCate].groupCompetitions[indexGrComp].competitions[indexComp].groups.push(groupsCreated)
            }

          } else {
            categories[indexCate].groupCompetitions[indexGrComp].competitions.push({
              "name": competition.data,
              "groups": [
                { "name": group.data }
              ]
            });
          }
        } else {
          categories[indexCate].groupCompetitions.push({
            "name": groupCompetitions.data,
            "competitions": [
              {
                "name": competition.data,
                "groups": [
                  { "name": group.data }
                ]
              }
            ]
          });
        }
      } else {
        // Crea el objeto y categories.push(objeto)
        categories.push({
          "name": category.name,
          "groupCompetitions": [
            {
              "name": groupCompetitions.data,
              "competitions": [
                {
                  "name": competition.data,
                  "groups": [
                    { "name": group.data }
                  ]
                }
              ]
            }
          ]
        });
      };
    });

    console.log(categories);

    const response = this.fbaseApiService.upsertCategoriesBySeason({
      "federation": "Madrid",
      "season": "2023",
      "categories": categories
    }).subscribe(
      res => {
        this.loadDisplay(
          "Datos enviados exitosamente",
          `Los datos para la categoria Madrid con el ID: ${res.data.seasonData.seasonId} para la temporada 2022-2023`
        );
        resp = res;
      },
      err => {
        console.error(err);
        this.loadDisplay(
          "Envio Fallido",
          `Los datos para la categoria Madrid para la temporada 2022-2023 han fallado`
        );
      }
    )

    console.log('print response', response);

  }
}
