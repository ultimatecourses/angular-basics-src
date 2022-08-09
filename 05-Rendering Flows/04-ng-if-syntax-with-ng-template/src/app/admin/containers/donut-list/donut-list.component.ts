import { Component, OnInit } from "@angular/core";

import { Donut } from "../../models/donut.model";

@Component({
  selector: "donut-list",
  template: `
    <div>
      <ng-container *ngIf="donuts.length; else nothing">
        <donut-card [donut]="donuts[0]"></donut-card>
        <donut-card [donut]="donuts[1]"></donut-card>
        <donut-card [donut]="donuts[2]"></donut-card>
      </ng-container>
      <ng-template [ngIf]="donuts.length" [ngIfElse]="nothing">
        <donut-card [donut]="donuts[0]"></donut-card>
        <donut-card [donut]="donuts[1]"></donut-card>
        <donut-card [donut]="donuts[2]"></donut-card>
      </ng-template>
      <ng-template #nothing>
        <p>No Donuts here...</p>
      </ng-template>
    </div>
  `,
  styles: [],
})
export class DonutListComponent implements OnInit {
  donuts!: Donut[];

  constructor() {}

  ngOnInit(): void {
    this.donuts = [
      {
        id: "y8z0As",
        name: "Just Chocolate",
        icon: "just-chocolate",
        price: 119,
        description: "For the pure chocoholic.",
      },
      {
        id: "3u98Kl",
        name: "Glazed Fudge",
        icon: "glazed-fudge",
        price: 129,
        promo: true,
        description: "Sticky perfection.",
      },
      {
        id: "ae098s",
        name: "Caramel Swirl",
        icon: "caramel-swirl",
        price: 129,
        description: "Chocolate drizzled with caramel.",
      },
    ];
  }
}
