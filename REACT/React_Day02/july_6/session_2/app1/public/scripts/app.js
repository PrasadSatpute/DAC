'use strict';

var songs = [{ title: 'album-1 song1', image: 'images/album1.jpeg' }, { title: 'album-1 song2', image: 'images/album1.jpeg' }, { title: 'album-1 song3', image: 'images/album1.jpeg' }, { title: 'album-2 song1', image: 'images/album2.jpeg' }, { title: 'album-2 song2', image: 'images/album2.jpeg' }, { title: 'album-2 song3', image: 'images/album2.jpeg' }];

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h3',
    null,
    'songs'
  ),
  React.createElement(
    'div',
    { className: 'songs-container' },
    songs.map(function (song) {
      return React.createElement(
        'div',
        { className: 'song-item' },
        React.createElement('img', { className: 'song-thumb', src: song.image }),
        React.createElement(
          'div',
          { className: 'song-title' },
          song.title
        )
      );
    })
  )
);
var root = document.getElementById('app');
ReactDOM.render(template, root);
