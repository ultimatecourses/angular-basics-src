import { Component, OnInit } from '@angular/core';
import { Donut } from '../../models/donut.model';

@Component({
  selector: 'donut-single',
  template: `
    <div>
      <donut-form (create)="onCreate($event)"></donut-form>
    </div>
  `,
  styles: [],
})
export class DonutSingleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onCreate(donut: Donut) {
    console.log('onCreate', donut);
  }
}
