// classes -> Blueprint to create an object with some fields
// (values) and methods (functions) to represent a 'thing'

class Vehicle {
  constructor(public color: string) {}

  public drive(): void {
    console.log('chugga chugga');
  }

  private honk(): void {
    console.log('beep');
  }

  protected run(): void {}
}

// inheritence

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  //override
  public drive(): void {
    console.log('vroom');
  }
  startHonkingProcess(): void {
    this.run();
  }
}

const car = new Car(4, 'Orange');
console.log(car.color);
car.drive();
car.startHonkingProcess();

// Access Modifier

// public -> this method can be called any where, any time
// private -> this method can only be called by other methods in this class
// protected -> This method can be called by other methods in this class, or by
// other methods in child classes
