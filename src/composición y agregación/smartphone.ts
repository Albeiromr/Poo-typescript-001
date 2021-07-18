import Battery from "./battery";
import Chip from "./chip";

export default class Smartphone {
  //state
  private model: string;
  private battery: Battery;
  private chipsNumber: number;
  private chips: Chip[];

  //constructor
  constructor(model: string, cantMAH: number, batteryBrand: string) {
    this.model = model;
    this.battery = new Battery(cantMAH, batteryBrand);
    this.chipsNumber = 0;
    //inicializamos un vector de chips
    this.chips = new Array<Chip>();
  }

  //methods
  public show(): void {
    console.log(`Model: ${this.model}`);
    this.battery.show();
    console.log(`ChipsNumber: ${this.chipsNumber}`);
    for (let i = 0; i < this.chipsNumber; i++) {
      this.chips[i].show();
    }
  }

  public addChip(newChip: Chip) {
    if (this.chipsNumber < 2) {
      this.chips.push(newChip);
      this.chipsNumber += 1;
    }
  }
}
