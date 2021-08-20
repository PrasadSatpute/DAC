import './Signup.css'
import { useState } from 'react'

const Signup = () => {
  // define the state
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [age, setAge] = useState(0)

  const signupUser = () => {
    console.log(`first name = ${firstName}`)
    console.log(`last name = ${lastName}`)
    console.log(`email = ${email}`)
    console.log(`password = ${password}`)
    console.log(`age = ${age}`)
  }

  return (
    <div className="container">
      <h1>Signup</h1>

      <div className="mb-3">
        <label>First Name</label>
        <input
          onChange={(event) => {
            // updating the state with user entered value
            setFirstName(event.target.value)
          }}
          className="form-control"
          type="text"
        />
      </div>
      <div className="mb-3">
        <label>Last Name</label>
        <input
          onChange={(event) => {
            // updating the state with user entered value
            setLastName(event.target.value)
          }}
          className="form-control"
          type="text"
        />
      </div>
      <div className="mb-3">
        <label>Email</label>
        <input
          onChange={(event) => {
            // updating the state with user entered value
            setEmail(event.target.value)
          }}
          className="form-control"
          type="email"
        />
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input
          onChange={(event) => {
            // updating the state with user entered value
            setPassword(event.target.value)
          }}
          className="form-control"
          type="password"
        />
      </div>
      <div className="mb-3">
        <label>Age</label>
        <input
          onChange={(event) => {
            // updating the state with user entered value
            setAge(event.target.value)
          }}
          className="form-control"
          type="number"
        />
      </div>
      <div className="mb-3">
        <button onClick={signupUser} className="btn btn-success">
          Signup
        </button>
      </div>
    </div>
  )
}

export default Signup
