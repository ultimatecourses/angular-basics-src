import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="app">
      <h1>{{ message.length ? message : 'Nothing here...' }}</h1>
      <h1 [innerText]="message.length ? message : 'Nothing here...'"></h1>
      <input [value]="message">
    </div>
  `,
  styles: [
    `
      .app {
        margin-top: 50px;
        font-size: 22px;
        color: #fff;
        text-align: center;
      }
    `,
  ],
})
export class AppComponent implements OnInit {
  message!: string;

  constructor() {}

  ngOnInit() {
    this.message = 'Hello World';
  }
}
