import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CompanyDetailComponent} from './company.detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CompanyDetailComponent
  ],
  exports: [
    CompanyDetailComponent
  ]
})
export class CompanyDetailModule { }
