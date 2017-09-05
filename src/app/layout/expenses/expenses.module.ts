import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpensesRoutingModule } from './expenses-routing.module';
import { ExpensesComponent } from './expenses.component';

@NgModule({
  imports: [
    CommonModule,
    ExpensesRoutingModule
  ],
  declarations: [ExpensesComponent]
})
export class ExpensesModule { }
