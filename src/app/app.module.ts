import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FooterComponent} from './common/footer/footer.component';
import {HeaderModule} from './common/header/header.module';
import {CandidateListModule} from './component/candidate/list/candidate.list.module';
import {CompanyDetailModule} from './component/company/detail/company.detail.module';
import {HomeModule} from './component/home/home.module';
import {AppRoutingModule} from './component/routing/app.routing.module';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    CandidateListModule,
    CompanyDetailModule,
    HomeModule,
    AppRoutingModule
  ],
  exports: [
    AppRoutingModule
  ],
  entryComponents: [],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
