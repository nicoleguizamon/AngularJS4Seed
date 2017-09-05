import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComplaintsRoutingModule } from './complaints-routing.module';
import { ComplaintsComponent } from './complaints.component';
import { FileUploadModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    ComplaintsRoutingModule,
    FileUploadModule
  ],
  declarations: [ComplaintsComponent]
})
export class ComplaintsModule { }
