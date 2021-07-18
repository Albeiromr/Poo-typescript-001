export default class Battery {
  //state
  private mAH: number;
  private brand: string;

  //constructor
  constructor(mAH: number, brand: string) {
    this.mAH = mAH;
    this.brand = brand;
  }

  //methods
  public show(): void {
    console.log(`mAH quantity: ${this.mAH}`);
    console.log(`Marca: ${this.brand}`);
  }
}
