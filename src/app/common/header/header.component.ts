import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Button} from '../../app-material/button/button.model';
import {DummyData} from '../DummyData';
import {Header} from './header.item.model';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html'
})
export class HeaderComponent {
    @Input() header: Header[];
    auth: Button[];
    @Output() featureSelected = new EventEmitter<string>();

  constructor() {
    this.auth = DummyData.dummyAuthButton1();
  }

  onSelect(feature: string){
    this.featureSelected.emit(feature);
  }
}
