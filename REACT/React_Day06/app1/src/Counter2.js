import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './actions/counterActions'

const Counter2 = () => {
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  const onIncrement = () => {
    dispatch(increment())
  }

  const onDecrement = () => {
    dispatch(decrement())
  }

  return (
    <div>
      <h1>Counter 2</h1>

      <button onClick={onIncrement}>Increment</button>
      <div>{counter}</div>
      <button onClick={onDecrement}>Decrement</button>
    </div>
  )
}

export default Counter2
