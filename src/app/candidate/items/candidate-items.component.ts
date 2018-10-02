import {Component} from '@angular/core';
import {CandidateModel} from '../model/CandidateModel';

@Component({
  selector: 'app-candidate-items',
  templateUrl: 'candidate-items.component.html'
})
export class CandidateItemsComponent {
  public items: CandidateModel[];


  constructor() {
    this.items = [
      new CandidateModel(new Date(), 'month1', 567, ['one', 'two', 'three'], ['one', 'two', 'three'], ['Yerevan', 'Gyumry']),
      new CandidateModel(new Date(), 'month1', 567, ['one', 'two', 'three'], ['one', 'two', 'three'], ['Yerevan', 'Gyumry'])
    ];
  }
}
