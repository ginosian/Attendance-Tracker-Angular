import {Component, Input} from '@angular/core';
import {Candidate} from '../../../model/candidate';
import {Button} from '../../../../common/button/button.model';

@Component({
  selector: 'app-candidate-item',
  templateUrl: 'candidate-item.component.html'
})
export class CandidateItemComponent {
  @Input() candidate: Candidate;
  manageButtons: Button[] = [];
  infoButtons: Button[] = [];

  constructor() {
    let manageButton1 = new Button('Edit  ', '#one-1', 'button gray app-link', 'fa fa-pencil');
    let manageButton2 = new Button('Add Note  ', '#two-1', 'button gray app-link', 'fa fa-sticky-note');
    let manageButton3 = new Button('Show Details  ', '#three-1', 'button gray app-link', 'fa fa-plus-circle');
    this.manageButtons.push(manageButton1);
    this.manageButtons.push(manageButton2);
    this.manageButtons.push(manageButton3);

    let infoButton1 = new Button('Download CV  ', '', '', 'fa fa-file-text');
    let infoButton2 = new Button('Contact  ', '', '', 'fa fa-envelope');
    this.infoButtons.push(infoButton1);
    this.infoButtons.push(infoButton2);
  }
}
