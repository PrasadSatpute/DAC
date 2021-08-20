const songs = ['song-1', 'song-2', 'song-3', 'song-4']

const template = (
  <div>
    <h3>songs</h3>
    {
      // iterating the songs array
      // getting each song at a time
      // returning an item having the song name in it
      songs.map((song) => {
        return <div className="song-title">{song}</div>
      })
    }
  </div>
)
const root = document.getElementById('app')
ReactDOM.render(template, root)
