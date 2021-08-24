import 'reflect-metadata';

class Plane {
  color: string = 'red';

  @markFunction('test')
  fly(): void {
    console.log('vrrrr');
  }
}

function markFunction(secretInfo: string) {
  return function (target: Plane, key: string) {
    Reflect.defineMetadata('secret', secretInfo, target, key);
  };
}

const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly');

console.log(secret);
