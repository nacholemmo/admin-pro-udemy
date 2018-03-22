import { Injectable } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';

@Injectable()
export class SharedService {

  constructor(private _router: Router) { }

  getDataRoute() {
    return this._router.events
    .filter( event => event instanceof ActivationEnd)
    .filter( (event: ActivationEnd) =>  event.snapshot.firstChild === null)
    .map((event: ActivationEnd) => event.snapshot.data);
  }

}
