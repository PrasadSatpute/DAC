'use strict';

// data
var songInfo = {
  title: 'Arijit Singh Songs',
  releaseDate: 'Feb 17, 2021',
  duration: '30:35',
  languages: 'Hindi'
};

var title = songInfo.title,
    releaseDate = songInfo.releaseDate,
    duration = songInfo.duration,
    languages = songInfo.languages;

// UI template to be rendered
// embedding the data within the template

var template = React.createElement(
  'p',
  null,
  React.createElement(
    'strong',
    null,
    'Album'
  ),
  React.createElement(
    'div',
    null,
    title
  ),
  React.createElement(
    'strong',
    null,
    'Released on'
  ),
  React.createElement(
    'div',
    null,
    releaseDate
  ),
  React.createElement(
    'strong',
    null,
    'Duration'
  ),
  React.createElement(
    'div',
    null,
    duration
  ),
  React.createElement(
    'strong',
    null,
    'Languages'
  ),
  React.createElement(
    'div',
    null,
    languages
  )
);

// the placeholder where the template will be rendered
var root = document.getElementById('app');

// render the template into the root element
ReactDOM.render(template, root);
