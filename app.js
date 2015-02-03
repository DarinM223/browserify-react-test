require('6to5/polyfill');

import React from 'react';
import {HelloComponent} from './HelloComponent.react.js';
import {Animal, Dog, Fox} from './js/es6class.js';

var animal = new Animal()
  , dog = new Dog()
  , fox = new Fox();

animal.noise();
dog.noise();
fox.noise();

React.render(
  React.createElement(HelloComponent, null),
  document.getElementById('app')
);

function doSomethingAsync() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      if (Math.round(Math.random())) 
        resolve('Success!');
      else 
        resolve('Failure!');
    }, 1000);
  });
}

async function doStuff() {
  try {
    var message = await doSomethingAsync();
    console.log(message);
    return message;
  } catch(e) {
    console.log(e);
    throw e;
  }
}

doStuff();
