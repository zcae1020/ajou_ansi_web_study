const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser');
const fs = require('fs')

const app = express()

app.use(session({secret: 'keyboard cat'}))
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  fs.exists(__dirname+`/data/${req.sessionID}.txt`, (e) => {
    if(e){
      fs.readFile(__dirname+`/data/${req.sessionID}.txt`, (err, data) => {
        if (err) throw err;
        res.sendFile(__dirname+`/data/${req.sessionID}.txt`)
      });
    }
    else{
      res.send(
        `<form method="POST" action="/">
          <input type="text" name="data">
          <input type="submit">
        </form>`)
    }
  });
});

app.post('/', function (req, res) {
  fs.writeFile(__dirname+`/data/${req.sessionID}.txt`, req.body.data, (e) => {
    if (e) throw e;
    console.log('The file has been saved!');
  });
  res.redirect('/');
});

app.listen(3000, () => {
  console.log("app listening at http://localhost:3000")
})