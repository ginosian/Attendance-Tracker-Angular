import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CandidateListComponent} from './items/candidate.list.component';
import {CandidateListItemComponent} from './item/candidate.list.item.component';
import {BrowserModule} from '@angular/platform-browser';
import {FilterModule} from '../../../app-material/filter/filter.module';
import {ButtonModule} from '../../../app-material/button/button.module';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FilterModule,
    ButtonModule
  ],
  declarations: [
    CandidateListComponent,
    CandidateListItemComponent
  ],
  exports: [
    CandidateListComponent,
    CandidateListItemComponent
  ]
})
export class CandidateListModule { }
