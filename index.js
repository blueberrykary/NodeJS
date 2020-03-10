const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const port = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/user_type', db.getUsers)
app.get('/user_type/:id', db.getUserById)
app.post('/user_type', db.createUser)
app.put('/user_type/:id', db.updateUser)
app.delete('/user_type/:id', db.deleteUser)


app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})
