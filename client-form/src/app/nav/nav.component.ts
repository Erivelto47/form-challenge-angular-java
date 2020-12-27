import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  items: MenuItem[];

  constructor() {
  }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Form Usuário',
        icon: 'pi pi-fw pi-file',
        items: [
          {
            label: 'Cadastro',
            icon: 'pi pi-fw pi-user-plus',
            routerLink: 'user'
          },
          {
            separator: true
          },
          {
            label: 'Listagem',
            icon: 'pi pi-fw pi-list',
            routerLink: 'list'
          }
        ]
      }
    ];
  }
}
