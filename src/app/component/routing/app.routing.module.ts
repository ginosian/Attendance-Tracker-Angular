import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {CandidateListComponent} from '../candidate/list/items/candidate.list.component';
import {CompanyDetailComponent} from '../company/detail/company.detail.component';


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'candidates', component: CandidateListComponent},
  {path: 'company', component: CompanyDetailComponent},
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
