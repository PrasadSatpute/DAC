const recentlyPlayedSongs = [
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

const trendingSongs = [
  {
    id: 3,
    title: 'song-3',
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
]

const topChatSongs = [
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
    id: 1,
    title: 'song-1',
    album: 'album1',
    thumbnail: 'images/album1.jpeg',
    duration: '03:53',
  },
]

// SongItem is accepting a song prop
const SongItem = ({ song }) => {
  return (
    <div className="song-item">
      <img className="song-thumb" src={song.thumbnail} />
      <div className="title">{song.title}</div>
    </div>
  )
}

const HorizontalSongList = ({ title, songs }) => {
  return (
    <div className="songs-container">
      <div className="song-container-title">{title}</div>
      {songs.map((s) => {
        return <SongItem song={s} />
      })}
    </div>
  )
}

const template = (
  <div>
    <div className="song-list-container">
      <HorizontalSongList title="Recently Played" songs={recentlyPlayedSongs} />
    </div>
    <div className="song-list-container">
      <HorizontalSongList title="Trending Songs" songs={trendingSongs} />
    </div>
    <div className="song-list-container">
      <HorizontalSongList title="Top Charts" songs={topChatSongs} />
    </div>
  </div>
)

const root = document.getElementById('app')
ReactDOM.render(template, root)
