import { NgModule } from '@angular/core';
import {FilterComponent} from './filter.component';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    FilterComponent
  ],
  exports: [
    FilterComponent
  ]
})
export class FilterModule { }
