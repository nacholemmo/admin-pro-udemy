import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {

  menu: any = [
    {
    titulo: 'Principal',
    icono: 'mdi mdi-gauge',
    subitmenus: [
      {titulo: 'Dashboard', url: '/dashboard'},
      {titulo: 'ProgressBar', url: '/progress'},
      {titulo: 'Graficas', url: '/graficas1'},
      {titulo: 'Promesas', url: '/promesas'},
      {titulo: 'Observe', url: '/rxjs'}
    ]
  }
];

  constructor() {
  }

}
