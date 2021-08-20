// data
const songInfo = {
  title: 'Arijit Singh Songs',
  releaseDate: 'Feb 17, 2021',
  duration: '30:35',
  languages: 'Hindi',
}

// spread opertator
const { title, releaseDate, duration, languages } = songInfo

// UI template to be rendered
// embedding the data within the template
const template = (
  <div>
    <strong>Album</strong>
    <div>{title}</div>

    <strong>Released on</strong>
    <div>{releaseDate}</div>

    <strong>Duration</strong>
    <div>{duration}</div>

    <strong>Languages</strong>
    <div>{languages}</div>
  </div>
)

// the placeholder where the template will be rendered
const root = document.getElementById('app')

// render the template into the root element
ReactDOM.render(template, root)
