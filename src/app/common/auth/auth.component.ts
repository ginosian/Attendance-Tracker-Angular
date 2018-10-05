import {Component, Input} from '@angular/core';
import {textDef} from '@angular/core/src/view';
import {templateJitUrl} from '@angular/compiler';
import {Button} from '../../app-material/button/button.model';

@Component({
  selector: 'app-auth',
  templateUrl: 'auth.component.html'
})
export class AuthComponent {
  @Input("auth") authButtons: Button[];
}
