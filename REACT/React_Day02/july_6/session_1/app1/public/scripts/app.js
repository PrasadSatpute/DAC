'use strict';

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h3',
    null,
    'this is a song info component v2'
  ),
  React.createElement(
    'div',
    null,
    'Relax with Bollywood Instrumentals'
  )
);

var root = document.getElementById('app');

ReactDOM.render(template, root);
