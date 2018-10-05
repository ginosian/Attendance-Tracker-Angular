import {Candidate} from './model/candidate';
import {Contact} from './model/contact';
import {Address} from './model/address';
import {ApplicationStatus} from './model/application.status';
import {ApplicantStatus} from './model/misc/applicant.status';
import {Skill} from './model/skill';
import {KnowledgeGrade} from './model/misc/knowledge.grade';
import {Button} from '../app-material/button/button.model';
import {Header} from './header/header.item.model';

export class DummyData {
  static dummyCandidates(): Candidate[] {
    return [new Candidate(
      'Joe',
      'Doe',
      'Backend Developer',
      new Contact('1234', 'a@a.com', new Address('Armenia', '0062')),
      new ApplicationStatus(new Date(), ApplicantStatus.INTERVIEWED),
      [new Skill('Java', 4, KnowledgeGrade.GOOD, KnowledgeGrade.EXCELLENT),
        new Skill('JavaScript', 0, KnowledgeGrade.SOMEWHAT_FAMILIAR, KnowledgeGrade.NONE)],
      'Loren ipsum dsjfsdjfkc\'sdjsf\''),
      new Candidate(
        'Joe',
        'Doe',
        'Frontend developer',
        new Contact('1234', 'a@a.com', new Address('Armenia', '0062')),
        new ApplicationStatus(new Date(), ApplicantStatus.INTERVIEWED),
        [
          new Skill('JavaScript', 4, KnowledgeGrade.GOOD, KnowledgeGrade.EXCELLENT),
          new Skill('Java', 0, KnowledgeGrade.SOMEWHAT_FAMILIAR, KnowledgeGrade.NONE)],
        'Loren ipsum dsjfsdjfkc\'sdjsf\'')];
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

  static dummyManageButton1(): Button[] {
    let manageButton1 = new Button('Edit  ', '#one-1', 'button gray app-link', 'fa fa-pencil');
    let manageButton2 = new Button('Add Note  ', '#two-1', 'button gray app-link', 'fa fa-sticky-note');
    let manageButton3 = new Button('Show Details  ', '#three-1', 'button gray app-link', 'fa fa-plus-circle');
    return [manageButton1, manageButton2, manageButton3];
  }

  static dummyInfoButton1(): Button[] {
    let infoButton1 = new Button('Download CV  ', '', '', 'fa fa-file-text');
    let infoButton2 = new Button('Contact  ', '', '', 'fa fa-envelope');
    return [infoButton1, infoButton2];
  }

  static dummyHeader(): Header[]{
    let parent1 = new Button('Home', '/', null, null);
    let child11 = new Button('About', '/', null, null);
    let child12 = new Button('Policy', '/', null, null);
    let child13 = new Button('Contacts', '/', null, null);
    let header1 = new Header(parent1, [child11, child12, child13]);

    let parent2 = new Button('Candidate Home', '/', null, null);
    let child21 = new Button('Resume', '/', null, null);
    let child22 = new Button('Account', '/', null, null);
    let child23 = new Button('Contacts', '/', null, null);
    let header2 = new Header(parent2, [child21, child22, child23]);

    let parent3 = new Button('Company', '/', null, null);
    let child31 = new Button('Candidates', '/', null, null);
    let child32 = new Button('Hiring Policy', '/', null, null);
    let child33 = new Button('Contacts', '/', '', null);
    let header3 = new Header(parent3, [child31, child32, child33]);
    return [header1, header2, header3];
  }

  static dummyAuthButton1(): Button[] {
    let manageButton1 = new Button('Sign Up  ', '#', null, 'fa fa-user');
    let manageButton2 = new Button('Contact  ', '#', null, 'fa fa-lock');
    return [manageButton1, manageButton2];
  }
}
