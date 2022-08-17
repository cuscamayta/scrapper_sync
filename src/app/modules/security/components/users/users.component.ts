import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  gfg: MenuItem[];
  ngOnInit(): void {
    this.gfg = [
      {
        label: "Web Technology",
        items: [
          {
            label: "HTML",
          },
          {
            label: "CSS",
            items: [
              {
                label: "Pure CSS",
              },
              {
                label: "Bulma CSS",
              },
              {
                label: "Foundation CSS",
              },
              {
                label: "Semantic UI",
              },
            ],
          },
          {
            label: "Javascript",
            items: [
              {
                label: "Angular",
              },
              {
                label: "React",
              },
              {
                label: "FabricJS",
              },
              {
                label: "VueJS",
              },
            ],
          },
          {
            label: "PHP",
          },
          {
            label: "Database Management System",
          },
        ],
      },
      {
        label: "Data Structures",
  
        items: [
          {
            label: "Linked List",
            items: [
              {
                label: "Singly Linked List",
              },
              {
                label: "Doubly Linked List",
              },
              {
                label: "Circular Linked List",
              },
            ],
          },
          {
            label: "Stack",
          },
          {
            label: "Queue",
          },
          {
            label: "Tree",
          },
          {
            label: "Graph",
          },
          {
            label: "Heap",
          },
        ],
      },
    ];
  }

  showUser(modalUsers) {
    this.modalService.open(modalUsers, { size: 'lg' });
  }


}
