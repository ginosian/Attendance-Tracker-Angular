import {Address} from './address';

export class Contact {
  public phone: string;
  public email: string;
  public address: Address;

  constructor(phone: string, email: string, address: Address) {
    this.phone = phone;
    this.email = email;
    this.address = address;
  }
}
