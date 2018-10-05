import { Component } from '@angular/core';
import {DummyData} from './common/DummyData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'at-front-test';
  public header = DummyData.dummyHeader();

  loadedFeature = 'candidates';

  onNavigate(feature: string){

  }
}
