import './SongRow.css'

// defining the component
const SongRow = ({ song }) => {
  return (
    <tr>
      <td>{song.id}</td>
      <td>
        <img className="heart" src="images/heart.png" />
      </td>
      <td>{song.title}</td>
      <td>{song.duration}</td>
      <td>{song.album}</td>
      <td>...</td>
    </tr>
  )
}

// exporting the component
export default SongRow
