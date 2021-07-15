class Smartphone {
  protected brand: string;
  protected color: string;
  protected displayInches: number;
  constructor(brand: string, color: string, displayInches: number) {
    this.brand = brand;
    this.color = color;
    this.displayInches = displayInches;
  }
  // function overloading, is not voilerplate, all the code is requires in order to
  // dont have type errors in the future
  sendText(): string;
  sendText(messageNumber: number): number
  sendText(messageNumber?: number): string | number {
    if (messageNumber) return messageNumber;
    else return "you have to provide a number";
  }
}

const iphone = new Smartphone("apple", "red", 8);

//as you can see type script does not present errors
//when asingning the sendText() function to two variables of different type
let testString: string
let testNumber: number

testString = iphone.sendText();
testNumber = iphone.sendText(30046);

console.log(testString);
console.log(testNumber);



