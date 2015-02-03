export class Animal {
  constructor() {
    console.log('Constructing an animal');
  }

  noise() {
    console.log('**Animal noise**');
  }
}

export class Dog extends Animal {
  constructor() {
    console.log('Constructing a dog');
  }

  noise() {
    console.log('Woof!');
  }
}

