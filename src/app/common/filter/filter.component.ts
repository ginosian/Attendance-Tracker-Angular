import {Component} from '@angular/core';
import {DummyData} from '../../component/DummyData';

@Component({
  selector: 'app-filter-component',
  templateUrl: 'filter.component.html'
})
export class FilterComponent {

  filters: string [] = [];
  sortOptions: string [] = [];

  constructor() {
    this.filters = DummyData.dummyFilters();
    this.sortOptions = DummyData.dummySortOptions();
  }
}
