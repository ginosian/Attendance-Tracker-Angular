import {Button} from '../../app-material/button/button.model';

export class Header {
  parent: Button;
  children: Button[];

  constructor(parent: Button, children: Button[]) {
    this.parent = parent;
    this.children = children;
  }
}
