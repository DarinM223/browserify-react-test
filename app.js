'use strict';

var React = require('react')
  , HelloComponent = require('./HelloComponent.react.js');

React.render(
  React.createElement(HelloComponent, null),
  document.getElementById('app')
);


