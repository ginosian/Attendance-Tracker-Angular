import {Component, Input} from '@angular/core';
import {Button} from '../../app-material/button/button.model';

@Component({
  selector: 'app-auth',
  templateUrl: 'auth.component.html'
})
export class AuthComponent {
  @Input("authButtons") authButtons: Button[];
}
