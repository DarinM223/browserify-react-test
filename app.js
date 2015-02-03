'use strict';

var React = require('react')
  , HelloComponent = require('./HelloComponent.react.js');

import {Animal, Dog} from './js/es6class.js';

var animal = new Animal()
  , dog = new Dog();

animal.noise();
dog.noise();

React.render(
  React.createElement(HelloComponent, null),
  document.getElementById('app')
);


