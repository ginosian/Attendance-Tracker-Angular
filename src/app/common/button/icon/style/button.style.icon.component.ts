import {Component} from '@angular/core';
import {DummyData} from '../../../../component/DummyData';

@Component({
  selector: 'app-manage-button',
  templateUrl: 'button.style.icon.component.html'
})
export class ButtonStyleIconComponent {
  buttons: Map<string, string>;
  style: string;
  icon: string;

  constructor() {
    this.buttons = DummyData.dummyManageButton1();
    this.style = 'button gray app-link';
    this.icon = 'fa fa-pencil';
  }
}
