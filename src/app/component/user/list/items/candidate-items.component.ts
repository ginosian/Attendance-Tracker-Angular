import {Component, OnInit} from '@angular/core';
import {Candidate} from '../../../model/candidate';
import {DummyData} from '../../../DummyData';
import {Account} from '../../../model/account';
import {Contact} from '../../../model/contact';
import {Address} from '../../../model/address';
import {Role} from '../../../model/role';
import {Division} from '../../../model/division';

@Component({
  selector: 'app-candidate-list',
  templateUrl: 'candidate-items.component.html'
})
export class CandidateItemsComponent implements OnInit{

  public items: Candidate[] = [];

  constructor() {
    this.items = [
      new Candidate(
        'Joe',
        'Doe',
        new Date(),
        new Date(),
        new Account('a@a.com', 'password'),
        new Contact('1234', 'a@a.com', new Address('Armenia', '0062')),
        [new Role('OWNER'), new Role('CANDIDATE'), new Role('ADMIN')],
        new Division('Yerevan branch')),

      new Candidate(
        'Joe',
        'Doe',
        new Date(),
        new Date(),
        new Account('a@a.com', 'password'),
        new Contact('1234', 'a@a.com', new Address('Armenia', '0062')),
        [new Role('OWNER'), new Role('CANDIDATE'), new Role('ADMIN')],
        new Division('Yerevan branch'))
    ];
  }

  ngOnInit(): void {
    this.items = DummyData.dummyCandidates();
  }


}
