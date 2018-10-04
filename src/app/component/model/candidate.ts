import {Contact} from './contact';
import {ApplicantStatus} from './misc/applicant.status';
import {Skill} from './skill';

export class Candidate {
  public firstName: string;
  public lastName: string;
  public speciality: string;
  public contact: Contact;
  public applicationStatus: ApplicantStatus;
  public skills: Skill[];
  public about: string;

  constructor(firstName: string, lastName: string, speciality: string, contact: Contact, applicationStatus: ApplicantStatus, skills: Skill[], about: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.speciality = speciality;
    this.contact = contact;
    this.applicationStatus = applicationStatus;
    this.skills = skills;
    this.about = about;
  }
}
