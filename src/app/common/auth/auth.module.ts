import {NgModule} from '@angular/core';
import {ButtonModule} from '../../app-material/button/button.module';
import {AuthComponent} from './auth.component';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  imports: [
    BrowserModule,
    ButtonModule
  ],
  declarations: [
    AuthComponent
  ]
})
export class AuthModule {
}
