var express = require('express');
var router = express.Router();
const mysql = require('mysql')
const bcrypt = require('bcrypt-nodejs')
const randToken = require('rand-token')
const config = require('../config')
let connection = mysql.createConnection(config.db)


router.post('/register', (req, res) => {
  const checkEmailQuery = `SELECT * FROM users WHERE email = ?`
  connection.query(checkEmailQuery, [req.body.email], (error, results) => {
    if (error) { throw error }

    if (results.length === 0) {
      const insertUserQuery = `INSERT INTO users (firstName,lastName,email,password)
      VALUES (?,?,?,?)`
      res.json({
        msg: "userAdded"
      })
      const password = bcrypt.hashSync(req.body.password)
      connection.query(insertUserQuery, [req.body.firstName, req.body.lastName, req.body.email, password])
    } else {
      res.json({
        msg: "userExists"
      })
    }
  })
})

router.post('/roommates',(req,res)=>{
  const insertRoommateQuery = `INSERT INTO household (firstName, lastName, email)
  VALUES (?,?,?)`
  connection.query(insertRoommateQuery, [req.body.firstName,req.body.lastName,req.body.email],(error,results)=>{
    res.json({
      msg:"roommateAdded"
    })
  })
})

router.post('/expenses',(req,res)=>{
  const insertExpenseQuery = `INSERT INTO expenses (name,date,amount)
  VALUES (?,?,?)`
  connection.query(insertExpenseQuery,[req.body.name,req.body.date,req.body.amount],(error,results)=>{
    res.json({
      msg:"expenseAdded"
    })
  })
})

router.post('/login', (req, res) => {
  const email = req.body.email
  const password = req.body.password
  const checkEmailQuery = `SELECT * FROM users WHERE email = ?`
  connection.query(checkEmailQuery, [email], (error, results) => {
    if (error) { throw error }
    if (results.length === 0) {
      res.json({
        msg:"badEmail"
      })
    }else{
      const checkHash = bcrypt.compareSync(password, results[0].password)
      if(checkHash){
        res.json({
          msg:"loginSuccess"
        })
      }else{
        res.json({
          msg:"badPassword"
        })
      }
    }
  })
})

module.exports = router;