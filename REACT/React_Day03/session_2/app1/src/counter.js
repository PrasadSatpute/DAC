import { useState } from 'react'

// props: RO
// state: RW
// - once it gets modified, the component gets rendered again
// react hook

// functional component
const Counter = () => {
  // count: variable which will maintain the state
  // setCount: the function used to modify the count's state
  // useState(0): the initial value of count is zero
  const [count, setCount] = useState(0)

  const onAdd = () => {
    // to update the state with new value
    setCount(count + 1)

    console.log(`in add count = ${count}`)
  }

  const onSubtract = () => {
    // to update the state with new value
    setCount(count - 1)

    console.log(`in subtract count = ${count}`)
  }

  return (
    <div>
      <span className="counter">{count}</span>
      <button onClick={onAdd} className="btn btn-success">
        +
      </button>
      <button onClick={onSubtract} className="btn btn-warning">
        -
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
