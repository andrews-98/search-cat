import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  exports: [
    CommonModule,
    MatSelectModule,
    MatCardModule,
    FormsModule,
    RouterModule
  ]
})
export class SharedModule { }
