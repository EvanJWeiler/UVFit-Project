'use strict';

const express = require('express');
const path = require('path');
const shell = require('shell');

const router = express.Router();

router.get('/', function (req, res) {
  res.sendFile(path.resolve('./public/index.html'));
});

router.post('/', function (req, res) {
  shell.exec('./public/build.sh');
});

module.exports = router;