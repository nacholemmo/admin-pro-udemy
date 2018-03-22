import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { SharedService } from '../../services/index.services';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {

  label: string;

  constructor(private _sharedService: SharedService, public _title: Title) {
    this._sharedService.getDataRoute()
    .subscribe(data => {
      console.log(data);

      this.label = data.titulo;
      this._title.setTitle(this.label);
    });
  }

  ngOnInit() {
  }

}
