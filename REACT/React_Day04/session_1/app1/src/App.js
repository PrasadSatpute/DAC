import './App.css'
import Discover from './components/Discover'
import Home from './components/Home'
import Profile from './components/Profile'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import MyMusic from './components/MyMusic'
import Radio from './components/Radio'

function App() {
  return (
    <div>
      <h1>My Application</h1>

      <BrowserRouter>
        <ul>
          <li>
            <Link to="/myhome">Home</Link>
          </li>
          <li>
            <Link to="/mydiscover">Discover</Link>
          </li>
          <li>
            <Link to="/myprofile">Profile</Link>
          </li>
          <li>
            <Link to="/mymusic">My Music</Link>
          </li>
          <li>
            <Link to="/myradio">Radio</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/myhome" component={Home} />
          <Route path="/mydiscover" component={Discover} />
          <Route path="/myprofile" component={Profile} />
          <Route path="/mymusic" component={MyMusic} />
          <Route path="/myradio" component={Radio} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
