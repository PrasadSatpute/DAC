// data
const songInfo = {
  title: 'Sagar Kinare',
  image: 'images/album2.jpeg',
}

const template = (
  <div className="song-item">
    <img className="song-thumb" src={songInfo.image} />
    <div className="song-title">{songInfo.title}</div>
  </div>
)

const root = document.getElementById('app')
ReactDOM.render(template, root)
