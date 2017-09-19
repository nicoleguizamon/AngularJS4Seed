import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpensesRoutingModule } from './expenses-routing.module';
import { ExpensesComponent } from './expenses.component';
import { DialogModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    ExpensesRoutingModule,
    DialogModule
  ],
  declarations: [ExpensesComponent]
})
export class ExpensesModule { }
