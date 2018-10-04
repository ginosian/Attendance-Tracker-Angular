import {Component} from '@angular/core';
import {Candidate} from '../../model/candidate';
import {Button} from '../../../common/button/button.model';

@Component({
  selector: 'app-candidate-detail',
  templateUrl: 'candidate.component.html'
})
export class CandidateComponent {
  public candidate: Candidate;
  public sendMessageButton: Button;

  constructor(candidate: Candidate) {
    this.candidate = candidate;
    this.sendMessageButton = new Button("Send message", "", "popup-with-zoom-anim button", "fa fa-envelope");
  }
}
