class Boat {
  @testDecorator
  color: string = 'red';

  @testDecorator
  get formattedColor(): string {
    return `This boat is ${this.color}`;
  }

  @logError('Oops, boat was sunk!')
  pilot(): void {
    throw new Error();
    console.log('swish');
  }
}

function testDecorator(target: any, key: string) {
  console.log(key);
}

function logError(message: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = function () {
      try {
        method();
      } catch (err) {
        console.log(message);
      }
    };
  };
}

new Boat().pilot();
