const songs = [
  {
    id: 1,
    title: 'song-1',
    album: 'album1',
    thumbnail: 'images/album1.jpeg',
    duration: '03:53',
  },
  {
    id: 2,
    title: 'song-2',
    album: 'album1',
    thumbnail: 'images/album1.jpeg',
    duration: '03:53',
  },
  {
    id: 3,
    title: 'song-3',
    album: 'album1',
    thumbnail: 'images/album1.jpeg',
    duration: '03:53',
  },
  {
    id: 4,
    title: 'song-4',
    album: 'album1',
    thumbnail: 'images/album1.jpeg',
    duration: '03:53',
  },
  {
    id: 5,
    title: 'song-5',
    album: 'album1',
    thumbnail: 'images/album1.jpeg',
    duration: '03:53',
  },
  {
    id: 6,
    title: 'song-6',
    album: 'album2',
    thumbnail: 'images/album2.jpeg',
    duration: '03:53',
  },
  {
    id: 7,
    title: 'song-7',
    album: 'album2',
    thumbnail: 'images/album2.jpeg',
    duration: '03:53',
  },
  {
    id: 8,
    title: 'song-8',
    album: 'album2',
    thumbnail: 'images/album2.jpeg',
    duration: '03:53',
  },
  {
    id: 9,
    title: 'song-9',
    album: 'album2',
    thumbnail: 'images/album2.jpeg',
    duration: '03:53',
  },
  {
    id: 10,
    title: 'song-10',
    album: 'album2',
    thumbnail: 'images/album2.jpeg',
    duration: '03:53',
  },
]

// functional component
const SongRow = ({ song }) => {
  return (
    <tr>
      <td>{song.id}</td>
      <td>
        <img className="heart" src="images/heart.png" />
      </td>
      <td>
        <img className="song-thumb" src={song.thumbnail} />
        {song.title}
      </td>
      <td>{song.album}</td>
      <td>{song.duration}</td>
      <td>...</td>
    </tr>
  )
}

// functional component
const SongTableComponent = () => {
  return (
    <table className="table table-responsive">
      <thead>
        <tr>
          <th>id</th>
          <th></th>
          <th>title</th>
          <th>album</th>
          <th>duration</th>
          <th>options</th>
        </tr>
      </thead>
      <tbody>
        {songs.map((s) => {
          return <SongRow song={s} />
        })}
      </tbody>
    </table>
  )
}

// functional component
const First = () => {
  return (
    <div className="box-container">
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
    </div>
  )
}

// SongTableComponent is a component created by us
// and rendered by react
const template = (
  <div className="box-container">
    <SongTableComponent />
  </div>
)
const root = document.getElementById('app')
ReactDOM.render(template, root)
