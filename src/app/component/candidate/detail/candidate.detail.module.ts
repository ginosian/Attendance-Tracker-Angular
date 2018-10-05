import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CandidateDetailComponent} from './candidate.detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CandidateDetailComponent
  ],
  exports: [
    CandidateDetailComponent
  ]
})
export class CandidateDetailModule { }
