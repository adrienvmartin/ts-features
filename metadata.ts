import 'reflect-metadata';

class Plane {
  color: string = 'red';

  @markFunction
  fly(): void {
    console.log('vrrrr');
  }
}

function markFunction(target: Plane, key: string) {
  Reflect.defineMetadata('secret', 123, target, key);
}

const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly');

console.log(secret);
