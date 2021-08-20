function onIncrement() {
  // alert('increment')
  counter += 1

  // refresh the component
  renderMyComponent()
}

function onDecrement() {
  // alert('decrement')
  counter -= 1

  // refresh the component
  renderMyComponent()
}

let counter = 0

// function which will render the component
const renderMyComponent = () => {
  const template = (
    <div className="counter-container">
      <button onClick={onDecrement} className="btn btn-minus">
        -
      </button>
      <div className="counter">{counter}</div>
      <button onClick={onIncrement} className="btn btn-plus">
        +
      </button>
    </div>
  )

  const root = document.getElementById('app')
  ReactDOM.render(template, root)
}

// render when the page is loaded
renderMyComponent()
