import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Candidate} from '../../../../common/model/candidate';
import {Button} from '../../../../app-material/button/button.model';
import {DummyData} from '../../../../common/DummyData';

@Component({
  selector: 'app-candidate-list-item',
  templateUrl: 'candidate.list.item.component.html'
})
export class CandidateListItemComponent {
  @Input() candidate: Candidate;
  manageButtons: Button[] = [];
  infoButtons: Button[] = [];

  constructor() {
    this.manageButtons = DummyData.dummyManageButton1()
    this.infoButtons = DummyData.dummyInfoButton1();
  }
}
