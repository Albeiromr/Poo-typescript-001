//propiedades métodos y contructor de una clase
class smartphone {
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

const mi10 = new smartphone("black", "xiaomi", 100);

mi10.makePhoneCall();
mi10.makePhoneCall();
mi10.makePhoneCall();
mi10.makePhoneCall();
mi10.makePhoneCall();
mi10.makePhoneCall();
mi10.makePhoneCall();
mi10.makePhoneCall();
mi10.makePhoneCall();

mi10.rechargeBattery = 13;
console.log(mi10.batteryLevel);


