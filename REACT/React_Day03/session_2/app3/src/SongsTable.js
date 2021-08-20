import './SongsTable.css'
import SongRow from './SongRow'

// create functional component
const SongsTable = ({ songs }) => {
  return (
    <div>
      <table className="table table-responsive">
        <thead>
          <tr>
            <th>#</th>
            <th></th>
            <th>title</th>
            <th>duration</th>
            <th>album</th>
            <th>options</th>
          </tr>
        </thead>
        <tbody>
          {songs.map((s) => {
            return <SongRow song={s} />
          })}
        </tbody>
      </table>
    </div>
  )
}

// export the component
export default SongsTable
