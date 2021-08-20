const songs = [
  { title: 'album-1 song1', image: 'images/album1.jpeg' },
  { title: 'album-1 song2', image: 'images/album1.jpeg' },
  { title: 'album-1 song3', image: 'images/album1.jpeg' },
  { title: 'album-2 song1', image: 'images/album2.jpeg' },
  { title: 'album-2 song2', image: 'images/album2.jpeg' },
  { title: 'album-2 song3', image: 'images/album2.jpeg' },
]

const template = (
  <div>
    <h3>songs</h3>
    <div className="songs-container">
      {songs.map((song) => {
        return (
          <div className="song-item">
            <img className="song-thumb" src={song.image} />
            <div className="song-title">{song.title}</div>
          </div>
        )
      })}
    </div>
  </div>
)
const root = document.getElementById('app')
ReactDOM.render(template, root)
