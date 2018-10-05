import {Component} from '@angular/core';
import {Candidate} from '../../../../common/model/candidate';
import {DummyData} from '../../../../common/DummyData';

@Component({
  selector: 'app-candidate-list',
  templateUrl: 'candidate.list.component.html'
})
export class CandidateListComponent {

  public items: Candidate[] = [];

  constructor() {
    this.items = DummyData.dummyCandidates();
  }
}
