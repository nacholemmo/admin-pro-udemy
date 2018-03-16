import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @Input() porcentaje: number;
  @Input() leyenda: string;
  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {
    this.porcentaje = 50;
    this.leyenda = 'leyenda';
  }

  ngOnInit() {
  }

  cambiaValor(valor) {
    if (this.porcentaje >= 100) {
      return;
    }

    this.porcentaje = this.porcentaje + valor;
    this.cambioValor.emit(this.porcentaje);
  }
}
