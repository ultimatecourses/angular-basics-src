import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'donut-single',
  template: `
    <div>
      <donut-form></donut-form>
    </div>
  `,
  styles: [],
})
export class DonutSingleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
