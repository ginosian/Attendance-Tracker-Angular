export class Button {
  public text: string;
  public href: string;
  public style: string;
  public icon: string;


  public constructor(text: string, href: string, style: string, icon: string) {
    this.text = text;
    this.href = href;
    this.style = style;
    this.icon = icon;
  }
}
