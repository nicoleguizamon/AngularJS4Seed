import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpensesRoutingModule } from './expenses-routing.module';
import { ExpensesComponent } from './expenses.component';

import { FileUploadModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    ExpensesRoutingModule,
    FileUploadModule
  ],
  declarations: [ExpensesComponent]
})
export class ExpensesModule { }
