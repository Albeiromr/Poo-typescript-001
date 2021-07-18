export default class Chip {
  //state
  private company: string;
  private number: number;

  //constructor
  constructor(company: string, number: number) {
    this.company = company;
    this.number = number;
  }

  //methods
  public show(): void {
    console.log(`Company: ${this.company}`);
    console.log(`Number: ${this.number}`);
  }
}
