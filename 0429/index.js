const express = require('express')
const session = require('express-session')
const fileStore = require('session-file-store')

const app = express()
const port = process.env.PORT || 8080

app.use(session({
  secret: 'keyboard cat',
}))

app.get('/', (req, res) => {
  console.log(req.sessionID)
  res.send('Welcome to Section')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})