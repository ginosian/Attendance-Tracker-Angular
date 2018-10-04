import {ApplicantStatus} from './misc/applicant.status';

export class ApplicationStatus {
  date: Date;
  status: ApplicantStatus;

  constructor(date: Date, status: ApplicantStatus) {
    this.date = date;
    this.status = status;
  }
}
