import {Candidate} from './model/candidate';
import {Account} from './model/account';
import {Contact} from './model/contact';
import {Address} from './model/address';
import {Role} from './model/role';
import {Division} from './model/division';

export class DummyData {
  static dummyCandidates(): Candidate[] {
    return [
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

  static dummyFilters(): string[] {
    return [
      'Filter by status',
      'New',
      'Interviewed',
      'Offer extended',
      'Hired',
      'Archived'
    ];
  }

  static dummySortOptions(): string[] {
    return [
      'Newest first',
      'Sort by name',
      'Sort by rating'
    ];
  }

  static dummyManageButton1(): Map<string, string> {
    return new Map<string, string>()
      .set('Edit', '#one-1')
      .set('Add Note', '#two-1')
      .set('Show Details', '#three-1');
  }
}
