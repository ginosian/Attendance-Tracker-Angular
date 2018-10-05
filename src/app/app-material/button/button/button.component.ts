import {Component, Input} from '@angular/core';
import {ButtonItemsComponent} from '../buttons/button.items.component';
import {Button} from '../button.model';

@Component({
  selector: 'app-button',
  templateUrl: 'button.component.html'
})
export class ButtonComponent extends ButtonItemsComponent{
  @Input("button") button: Button;
}
