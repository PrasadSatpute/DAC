import './App.css'
import SongsTable from './SongsTable'

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

function App() {
  return (
    <div>
      <SongsTable songs={songs} />
    </div>
  )
}

export default App
