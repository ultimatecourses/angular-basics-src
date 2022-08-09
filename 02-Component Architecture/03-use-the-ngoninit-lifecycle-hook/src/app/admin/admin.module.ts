import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonutListComponent } from './containers/donut-list/donut-list.component';

@NgModule({
  declarations: [DonutListComponent],
  imports: [CommonModule],
  exports: [DonutListComponent],
})
export class AdminModule {}
