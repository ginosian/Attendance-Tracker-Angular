import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FooterComponent} from './common/footer/footer.component';
import {FilterComponent} from './app-material/filter/filter.component';
import {HeaderModule} from './common/header/header.module';
import {CandidateListModule} from './component/candidate/list/candidate.list.module';
import {ButtonComponent} from './app-material/button/button/button.component';
import {ButtonModule} from './app-material/button/button.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    CandidateListModule,
  ],
  exports: [
  ],
  entryComponents: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
