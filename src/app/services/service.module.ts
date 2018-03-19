
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsService, SidebarService, SharedService } from './index.services';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ ],
  declarations: [],
  providers: [
    SettingsService,
    SidebarService,
    SharedService]
})
export class ServiceModule { }
