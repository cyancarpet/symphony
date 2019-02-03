const express = require('express')
const app = express()

// make express look in the public directory for assets (css/js/img)
app.use(express.static('public'))

// set the home page route
app.get('/', function(req, res) {
  res.sendFile('public/index.html')
});

app.get('/api/data', (req, res) => {
  // todo: fetch from dB
  let fakeData = JSON.stringify({
    "hello": "friends"
  })

  res.setHeader('Content-Type', 'application/json')
  res.send(fakeData)
})

// set the port of our application
// process.env.PORT lets the port be set by Heroku
app.listen(process.env.PORT || 3000)