import { SettingsService } from '../../services/index.services';
import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  selectores: any;

  constructor(@Inject(DOCUMENT) private _document, public _ajustes: SettingsService) {
    this.selectores = document.getElementsByClassName('selector');
    this.colocarCheck();
  }

  ngOnInit() {
    this.colocarCheck();
  }

  cambiaColor(tema: string, link: any) {
    this.aplicarCheck(link);
    this._ajustes.aplicarTema(tema);
  }

  aplicarCheck(link: any) {
     for (const ref of this.selectores) {
      ref.classList.remove('working');
    }
    link.classList.add('working');
  }

  colocarCheck() {
    const tema = this._ajustes.ajustes.tema;
    for (const ref of this.selectores) {
      if (tema === ref.getAttribute('data-theme')) {
        ref.classList.add('working');
        break;
      }
    }
  }
}
