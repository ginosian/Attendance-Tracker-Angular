import {Component} from '@angular/core';
import {DummyData} from '../../../component/DummyData';

@Component({
  selector: 'app-icon-button',
  templateUrl: 'button.icon.component.html'
})
export class ButtonIconComponent {
  buttons: Map<string, string>;
  icon: string;

  constructor() {
    this.buttons = DummyData.dummyInfoButton1();
    this.icon = "fa fa-file-text";
  }
}
