const express = require('express')
const multer = require('multer');
const app = express()
const port = 3000
const path = require('path');

app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

var storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './uploads');
  },
  filename: function (req, file, callback) {
    callback(null, Date.now() + '-' + file.originalname);
  }
});
var upload = multer({storage: storage}).single('file');

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/views/index.html'));
})

app.get('/movie', (req, res) => {
  res.sendFile(path.join(__dirname + '/views/moviesingle.html'));
})

app.post('/upload', (req, res) => {
  upload(req, res, function (err) {
    if (err) {
      console.log("Couldn't Upload!")
      console.log(err);
      return res.sendStatus(500);
    }
    console.log("Uploaded Successfully!")
    res.end("File is uploaded");
  });
})

app.listen(port, () => {
  console.log(`Baiting app listening at http://localhost:${port}`)
})