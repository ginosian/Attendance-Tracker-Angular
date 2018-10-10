import { NgModule } from '@angular/core';
import {ButtonComponent} from './button/button.component';
import {ButtonItemsComponent} from './buttons/button.items.component';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from '../../component/routing/app.routing.module';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
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
