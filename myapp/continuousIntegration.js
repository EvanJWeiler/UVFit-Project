const port = 3005;
const express = require('express');
const exec = require('child_process').exec;

const app = express();
app.set('port', process.env.PORT || port);

app.use(express.static('public'));
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.post('/', function (req, res) {
  exec('./restart.sh', function (error, stdout, stderr) {
    console.log(error);
    console.log(stdout);
    console.log(stderr);
  });
});

app.listen(port);