// template to be rendered
const template = (
  <div>
    <strong>Album</strong>
    <div>Relax with Bollywood Instrumentals</div>

    <strong>Released on</strong>
    <div>Feb 07, 2020</div>

    <strong>Duration</strong>
    <div>03:35</div>

    <strong>Languages</strong>
    <div>English</div>
  </div>
)

// the placeholder where the template will be rendered
const root = document.getElementById('app')

// render the template into the root element
ReactDOM.render(template, root)
