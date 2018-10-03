import {Component} from '@angular/core';
import {DummyData} from '../../../component/DummyData';

@Component({
  selector: 'app-info-button',
  templateUrl: 'info.button.component.html'
})
export class InfoButtonComponent {
  buttons: Map<string, string>;

  constructor() {
    this.buttons = DummyData.dummyInfoButton1();
  }
}
