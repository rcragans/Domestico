var express = require('express');
var router = express.Router();
const mysql = require('mysql')
const bcrypt = require('bcrypt-nodejs')
const randToken = require('rand-token')
const config = require('../config')
let connection = mysql.createConnection(config.db)


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
