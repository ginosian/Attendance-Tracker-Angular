import {Component} from '@angular/core';
import {DummyData} from '../../../component/DummyData';

@Component({
  selector: 'app-manage-button',
  templateUrl: 'manage.button.component.html'
})
export class ManageButtonComponent {
  buttons: Map<string, string>;

  constructor() {
    this.buttons = DummyData.dummyManageButton1();
  }
}
