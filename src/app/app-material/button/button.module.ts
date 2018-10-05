import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonComponent} from './button/button.component';
import {ButtonItemsComponent} from './buttons/button.items.component';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    ButtonComponent,
    ButtonItemsComponent
  ],
  exports: [
    ButtonComponent,
    ButtonItemsComponent
  ]
})
export class ButtonModule { }
