import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FooterComponent} from './common/footer/footer.component';
import {HeaderModule} from './common/header/header.module';
import {CandidateListModule} from './component/candidate/list/candidate.list.module';
import {CompanyDetailModule} from './component/company/detail/company.detail.module';
import {RouterModule, Routes} from '@angular/router';
import {CandidateListComponent} from './component/candidate/list/items/candidate.list.component';
import {CompanyDetailComponent} from './component/company/detail/company.detail.component';
import {HomeComponent} from './component/home/home.component';
import {HomeModule} from './component/home/home.module';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'candidates', component: CandidateListComponent},
  {path: 'company', component: CompanyDetailComponent},
];

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
    RouterModule.forRoot(appRoutes)
  ],
  exports: [],
  entryComponents: [],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
