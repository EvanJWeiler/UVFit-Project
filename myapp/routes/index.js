'use strict';

const express = require('express');
const path = require('path');
const exec = require('child_process').exec;

const router = express.Router();

router.get('/', function (req, res) {
  res.sendFile(path.resolve('./public/index.html'));
});

router.post('/', function (req, res) {
  exec('echo test 123', function (error, stdout, stderr) {
    console.log(error);
    console.log(stdout);
    console.log(stderr);
  });
});

module.exports = router;