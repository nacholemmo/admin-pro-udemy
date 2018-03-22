import { Component, OnInit, OnDestroy } from '@angular/core';
// tslint:disable-next-line:import-blacklist
import { Observable, Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() {


    this.subscription = this.regresaObs().retry(2)
    .subscribe(
      numero => {
        console.log('Subs', numero);
      },
      error => {
        console.error('Error', error);
      },
      () => {
        console.log('termino');
      }
    );
  }

  ngOnInit() {

  }
  ngOnDestroy() {
   this.subscription.unsubscribe();
  }
  regresaObs(): Observable<any> {
    return new Observable(observer => {
      let contador = 0;

      const intervalo = setInterval(() => {
        contador += 1;

        const obj = {
          valor: contador
        };

        observer.next(obj);

        /*if (contador === 3) {
          clearInterval(intervalo);
          observer.complete();
        }*/
      }, 1000);
    })
    .retry(2)
    .map( (resp: any) => {
      return resp.valor;
    })
    .filter( (valor, index) => {
      if ((valor % 2) === 1) {
        return true;
      } else {
        return false;
      }
    });
  }
}
