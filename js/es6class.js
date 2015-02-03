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

export class Fox extends Animal {
  constructor() {
    console.log('Constructing a fox');
  }

  noise() {
    console.log('What does the fox say?');
  }
}

