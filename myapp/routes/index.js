'use strict';

const express = require('express');
const path = require('path');
const child_process = require('child_process');

const router = express.Router();

router.get('/', function (req, res) {
  res.sendFile(path.resolve('./public/index.html'));
});

router.post('/', function (req, res) {
  // child_process.exec('./public/build.sh');
  child_process.exec('"echo this is a test"');
});

module.exports = router;