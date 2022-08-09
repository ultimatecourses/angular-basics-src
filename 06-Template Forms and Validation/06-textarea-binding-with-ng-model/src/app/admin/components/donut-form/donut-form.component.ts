import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'donut-form',
  template: `
    <form class="donut-form" #form="ngForm">
      <label>
        <span>Name</span>
        <input type="text" name="name" class="input" ngModel />
      </label>

      <label>
        <span>Icon</span>
        <select name="icon" class="input input--select" ngModel>
          <option *ngFor="let icon of icons" [ngValue]="icon">
            {{ icon }}
          </option>
        </select>
      </label>

      <label>
        <span>Price</span>
        <input type="number" name="price" class="input" ngModel />
      </label>

      <div class="donut-form-radios">
        <p class="donut-form-radios-label">Promo:</p>
        <label>
          <input type="radio" name="promo" [value]="undefined" ngModel />
          <span>None</span>
        </label>
        <label>
          <input type="radio" name="promo" value="new" ngModel />
          <span>New</span>
        </label>
        <label>
          <input type="radio" name="promo" value="limited" ngModel />
          <span>Limited</span>
        </label>
      </div>

      <label>
        <span>Description</span>
        <textarea
          name="description"
          class="input input--textarea"
          ngModel
        ></textarea>
      </label>

      <pre>{{ form.value | json }}</pre>
    </form>
  `,
  styles: [
    `
      .donut-form {
        &-radios {
          display: flex;
          align-content: center;
          &-label {
            margin-right: 10px;
          }
          label {
            display: flex;
            align-items: center;
            span {
              color: #444;
              margin-bottom: 0;
            }
          }
        }
      }
    `,
  ],
})
export class DonutFormComponent implements OnInit {
  icons: string[] = [
    'caramel-swirl',
    'glazed-fudge',
    'just-chocolate',
    'sour-supreme',
    'strawberry-glaze',
    'vanilla-sundae',
    'zesty-lemon',
  ];

  constructor() {}

  ngOnInit(): void {}
}
