const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
app.use(cors('*'))
app.use(bodyParser.json())

// routers
const routerUser = require('./routes/user')
const routerAlbum = require('./routes/album')
const routerArtist = require('./routes/artist')
const routerSong = require('./routes/song')

// add the routers
app.use('/user', routerUser)
app.use('/album', routerAlbum)
app.use('/artist', routerArtist)
app.use('/song', routerSong)

app.listen(3000, '0.0.0.0', () => {
  console.log('server started on port 3000')
})
