import {Account} from './account';
import {Contact} from './contact';
import {Role} from './role';
import {Division} from './division';

export class Candidate {
  public firstName: string;
  public lastName: string;
  public joiningDate: Date;
  public leavingDate: Date;
  public userDetail: Account;
  public contact: Contact;
  public roles: Role[];
  public division: Division;


  constructor(firstName: string, lastName: string, joiningDate: Date, leavingDate: Date, userDetail: Account, contact: Contact, roles: Role[], division: Division) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.joiningDate = joiningDate;
    this.leavingDate = leavingDate;
    this.userDetail = userDetail;
    this.contact = contact;
    this.roles = roles;
    this.division = division;
  }
}
