const express = require('express')
const app = express()
const port = 3000
const path = require('path');

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/views/index.html'));
})

app.get('/movie', (req, res) => {
  res.sendFile(path.join(__dirname+'/views/moviesingle.html'));
})

app.listen(port, () => {
  console.log(`Baiting app listening at http://localhost:${port}`)
})