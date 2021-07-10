//propiedades métodos y contructor de una clase
class Smartphone {
  private color: string;
  private brand: string;
  private battery: number;

  constructor(color: string, brand: string, battery: number) {
    this.color = color;
    this.brand = brand;
    this.battery = battery;
  }

  makePhoneCall(): void {
    if (this.battery === 0) throw "The phone has not battery";
    this.battery -= 10;
  }

  public get batteryLevel(): number {
      return this.battery;
  }

  public set rechargeBattery(amountToRecharge: number){
    this.battery += amountToRecharge
  }

}

class Android extends Smartphone {
  //creo el constructor para la clase android
  constructor(color: string){
    // con el método super sirve para inicializar el constructor de la superclase
    //de esta manera estamos innicializando el estado de la superclase para poder heredar
    //un estado y métodos que no estén vacíos
    super(color, "Xiaomi", 100);
  }
}

class Iphone extends Smartphone {
  //creo el constructor para la clase android
  constructor(color: string){
    // con el método super sirve para inicializar el constructor de la superclase
    //de esta manera estamos innicializando el estado de la superclase para poder heredar
    //un estado y métodos que no estén vacíos
    super(color, "Iphone", 100);
  }
}



