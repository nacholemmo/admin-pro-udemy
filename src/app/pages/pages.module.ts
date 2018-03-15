import { PAGES_ROUTES } from './pages.routes';
// modulos
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PAGES_ROUTES
  ],
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Graficas1Component
  ]
})
export class PagesModule { }
