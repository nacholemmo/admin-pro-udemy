import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  progress: number;

constructor() {
  this.progress = 50;
  }

  ngOnInit() {
  }

  actualizar(event) {
    this.progress = event;
  }

}
