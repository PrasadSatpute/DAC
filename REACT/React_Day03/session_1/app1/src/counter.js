// the props (properties) are read only
// the state is read-writable

const Counter = () => {
  let counterValue = 0

  const onAdd = () => {
    // alert('on add')
    counterValue += 1
    console.log(`counterValue = ${counterValue}`)
  }

  const onSubtract = () => {
    // alert('on subtract')
    counterValue -= 1
    console.log(`counterValue = ${counterValue}`)
  }

  return (
    <div>
      <h2>Counter</h2>
      <button onClick={onSubtract} className="btn btn-success">
        -
      </button>
      <span className="counter-value">{counterValue}</span>
      <button onClick={onAdd} className="btn btn-warning">
        +
      </button>
    </div>
  )
}

const template = (
  <div>
    <Counter />
  </div>
)

const root = document.getElementById('app')
ReactDOM.render(template, root)
