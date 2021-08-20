const express = require('express')
const router = express.Router()
const db = require('../db')
const utils = require('../utils')

router.get('/', (request, response) => {
  const query = `select * from artist`
  db.query(query, (error, artists) => {
    response.send(utils.createResult(error, artists))
  })
})

router.post('/', (request, response) => {
  const { firstName, lastName, thumbnail } = request.body

  const query = `insert into artist (firstName, lastName, thumbnail) values ('${firstName}', '${lastName}', '${thumbnail}')`
  db.query(query, (error, artists) => {
    response.send(utils.createResult(error, artists))
  })
})

module.exports = router
