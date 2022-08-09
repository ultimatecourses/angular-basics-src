import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// containers
import { DonutListComponent } from './containers/donut-list/donut-list.component';
import { DonutSingleComponent } from './containers/donut-single/donut-single.component';

// components
import { DonutCardComponent } from './components/donut-card/donut-card.component';
import { DonutFormComponent } from './components/donut-form/donut-form.component';

@NgModule({
  declarations: [DonutListComponent, DonutSingleComponent, DonutCardComponent, DonutFormComponent],
  imports: [CommonModule],
  exports: [DonutListComponent, DonutSingleComponent],
})
export class AdminModule {}
