class Vehicle {
  constructor(public color: string, public type: string) {}

  protected honk(): void {
    console.log('BEEP!');
  }
}

class MyCar extends Vehicle {
  constructor(public wheels: number, color: string, type: string) {
    super(color, type);
  }

  private drive(): void {
    console.log('vroom vroom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const vehicle = new Vehicle('orange', 'Ford Focus');
console.log(vehicle.color);

const civic = new MyCar(4, 'blue', 'Honda Civic');
civic.startDrivingProcess();
console.log(`My ${civic.type} is ${civic.color}`);
