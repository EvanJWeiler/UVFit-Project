'use strict';

const express = require('express');
const path = require('path');
const { exec } = require('child_process');

const router = express.Router();

router.get('/', function (req, res) {
  res.sendFile(path.resolve('./public/index.html'));
});

router.post('/', function (req, res) {
  // child_process.exec('./public/build.sh'); // comment
  exec('./public/build.sh');
});

module.exports = router;