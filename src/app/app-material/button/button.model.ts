export class Button {
  public text: string;
  public href: string;
  public style: string;
  public icon: string;
  public navigate: string;


  public constructor(text: string, href: string, style: string, icon: string, navigate: string) {
    this.text = text;
    this.href = href;
    this.style = style;
    this.icon = icon;
    this.navigate = navigate;
  }
}
