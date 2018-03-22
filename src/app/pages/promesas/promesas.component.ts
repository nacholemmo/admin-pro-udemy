import { Component, OnInit } from '@angular/core';
import {resolve, reject } from 'q';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() { // tslint:disable-next-line:no-shadowed-variable
    const promesa = new Promise( (resolve, reject ) => {
      let contador = 0;

      const intervalo = setInterval(() => {
        contador += 1;
        console.log(contador);
        if ( contador === 3) {
          resolve();
          clearInterval(intervalo);
        }
      }, 1000);

    });

    promesa.then(
      () =>   console.log('termino'),
      () => console.log('error')
    );
  }

  ngOnInit() {
  }

}
