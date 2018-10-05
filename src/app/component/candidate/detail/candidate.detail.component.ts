import {Component} from '@angular/core';
import {Candidate} from '../../../common/model/candidate';
import {Button} from '../../../app-material/button/button.model';

@Component({
  selector: 'app-candidate-detail',
  templateUrl: 'candidate.detail.component.html'
})
export class CandidateDetailComponent {
  public candidate: Candidate;
  public sendMessageButton: Button;

  constructor(candidate: Candidate) {
    this.candidate = candidate;
    this.sendMessageButton = new Button("Send message", "", "popup-with-zoom-anim button", "fa fa-envelope");
  }
}
