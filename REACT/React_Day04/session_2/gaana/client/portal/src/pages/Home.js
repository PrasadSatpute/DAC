import axios from 'axios'
import { useState } from 'react'
import HorizontalSlider from '../components/HorizontalSlider'

const Home = () => {
  const [allSongs, setAllSongs] = useState([])

  const getAllSongs = () => {
    // rest API
    const url = 'http://localhost:4000'

    // send the GET request
    axios.get(url + '/song').then((response) => {
      const result = response.data
      if (result.status === 'success') {
        setAllSongs(result.data)
      } else {
        alert('error occured while getting all songs')
      }
    })
  }

  return (
    <div>
      <h2 className="page-title">Home</h2>
      <button className="btn btn-success" onClick={getAllSongs}>
        Get Songs
      </button>
      <HorizontalSlider items={allSongs} title="All Songs" />
    </div>
  )
}

export default Home
