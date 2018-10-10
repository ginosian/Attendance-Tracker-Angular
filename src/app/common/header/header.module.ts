import { NgModule } from '@angular/core';
import {HeaderComponent} from './header.component';
import {AuthComponent} from '../auth/auth.component';
import {ButtonModule} from '../../app-material/button/button.module';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../../component/routing/app.routing.module';

@NgModule({
  declarations: [
    HeaderComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    ButtonModule,
  ],
  exports: [
    HeaderComponent,
    AuthComponent,
  ]
})
export class HeaderModule { }
