export class CandidateModel {

  public birthDate: Date;
  public startingDate: Date;
  public timePeriod: string;
  public hourlyRate: number;
  public skills: string[];
  public certifications: string[];
  public areas: string[];


  constructor(
    birthDate: Date,
    startingDate: Date,
    timePeriod: string,
    hourlyRate: number,
    skills: string[],
    certifications: string[],
    areas: string[]) {

    this.birthDate = birthDate;
    this.startingDate = startingDate;
    this.timePeriod = timePeriod;
    this.hourlyRate = hourlyRate;
    this.skills = skills;
    this.certifications = certifications;
    this.areas = areas;
  }
}
