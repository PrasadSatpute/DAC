// data
const songInfo = {
  title: 'Arijit Singh Songs',
  releaseDate: 'Feb 17, 2021',
  duration: '30:35',
  languages: 'Hindi',
}

// UI template to be rendered
// embedding the data within the template
const template = (
  <div>
    <strong>Album</strong>
    <div>{songInfo.title}</div>

    <strong>Released on</strong>
    <div>{songInfo.releaseDate}</div>

    <strong>Duration</strong>
    <div>{songInfo.duration}</div>

    <strong>Languages</strong>
    <div>{songInfo.languages}</div>
  </div>
)

// the placeholder where the template will be rendered
const root = document.getElementById('app')

// render the template into the root element
ReactDOM.render(template, root)
