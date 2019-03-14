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
      const insertUserQuery = `INSERT INTO users (firstName,lastName,email,password,token)
      VALUES (?,?,?,?,?)`
      const token = randToken.uid(50)
      const password = bcrypt.hashSync(req.body.password)
      res.json({
        msg: "userAdded"
      })
      connection.query(insertUserQuery, [req.body.firstName, req.body.lastName, req.body.email, password, token])
    } else {
      res.json({
        msg: "userExists"
      })
    }
  })
})

router.post('/roommates', (req, res) => {
  const selectQuery = `SELECT * from users where token=?`
  connection.query(selectQuery, [req.body.token], (error, results) => {
    if (error) { throw error }
    const insertRoommateQuery = `INSERT INTO household (firstName, lastName, email, uid)
    VALUES (?,?,?,?)`
    connection.query(insertRoommateQuery, [req.body.firstName, req.body.lastName, req.body.email, results[0].id], (error, results) => {
      if (error) { throw error }
      res.json({
        msg: "roommateAdded"
      })
    })
  })
})

router.post('/roommates/getRoommates', (req, res) => {
  // console.log(req.body)
  const selectQuery = `SELECT household.firstName, household.lastName, household.email, household.id FROM household INNER JOIN users ON users.id = household.uid WHERE users.token=?`
  connection.query(selectQuery, [req.body.token], (error, results) => {
    if (error) { throw error }
    // console.log(results)
    res.json(
      results
    )
  })
})

router.post('/expenses/getExpenses', (req, res) => {
  const selectQuery = `SELECT expenses.name, expenses.date, expenses.amount, expenses.id FROM expenses INNER JOIN users ON users.id = expenses.uid WHERE users.token=?`
  connection.query(selectQuery, [req.body.token], (error, results) => {
    if (error) { throw error }
    res.json(
      results
    )
  })
})

router.post('/expenses', (req, res) => {
  const selectQuery = `SELECT * from users where token=?`
  connection.query(selectQuery, [req.body.token], (error, results) => {
    if (error) { throw error }
    const insertExpenseQuery = `INSERT INTO expenses (name,date,amount,uid)
    VALUES (?,?,?,?)`
    connection.query(insertExpenseQuery, [req.body.expenseName, req.body.date, req.body.amount, results[0].id], (error, results) => {
      res.json({
        msg: "expenseAdded",
      })
    })
  })
})



router.post('/payments', (req, res) => {
  const selectQuery2 = `SELECT household.id from household INNER JOIN users ON users.id = household.uid WHERE users.token =? AND household.firstName =?`
  connection.query(selectQuery2, [req.body.token, req.body.name], (error, results2) => {
    if (error) { throw error }
    console.log(req.body)
    console.log(results2)
    const insertPaymentQuery = `INSERT INTO payments (hid,amount,date)
      VALUES (?,?,?)`
    connection.query(insertPaymentQuery, [results2[0].id, req.body.amount, req.body.date], (error, results3) => {
      if (error) { throw error }
      res.json({
        msg: "paymentAdded"
      })
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
        msg: "badEmail"
      })
    } else {
      const checkHash = bcrypt.compareSync(password, results[0].password)
      if (checkHash) {
        const token = randToken.uid(50)
        const updateTokenQuery = `UPDATE users set token = ? WHERE email = ?`
        connection.query(updateTokenQuery, [token, email], (req, res) => {
          if (error) { throw error }
        })
        res.json({
          msg: "loginSuccess",
          token,
          firstName: results[0].firstName,
          lastName: results[0].lastName,
          id: results[0].id,
          email: results[0].email

        })
      } else {
        res.json({
          msg: "badPassword"
        })
      }
    }
  })
})

router.post('/roommates/delete/:id', (req, res) => {
  const id = req.body.id
  deleteQuery = `DELETE FROM household where id = ?`
  connection.query(deleteQuery, [id], (error, results) => {
    if (error) { throw error }
    res.json({
      msg: "roommateDeleted"
    })
  })
})

router.post('/expenses/delete/:id', (req, res) => {
  const id = req.body.id
  deleteQuery = `DELETE FROM expenses WHERE id = ?`
  connection.query(deleteQuery, [id], (error, results) => {
    if (error) { throw error }
    res.json({
      msg: "expenseDeleted"
    })
  })
})

router.post('/dashboard', (req, res) => {
  const token = req.body.token
  selectQuery = `SELECT * from users WHERE token = ?`
  connection.query(selectQuery, [token], (error, results) => {
    if (error) { throw error }
    const id = results[0].id
    selectQuery2 = `SELECT max(t1.uid) as uid, max(count) as numberOfRoomates, max(firstname) as firstName, max(hid) as hid, max(amount) as amount, max(amount/count) as avgPrice FROM 
	(
		SELECT MAX(household.firstName) as firstname, SUM(expenses.amount) AS amount, max(household.id) as hid, ? as uid FROM household 
			INNER JOIN users ON household.uid = users.id 
			INNER JOIN expenses ON users.id = expenses.uid 
		WHERE users.id = ? 
		GROUP BY household.firstName
	) as t1 INNER JOIN (
		SELECT count(uid)+1 as count, uid FROM household WHERE uid = ? GROUP BY uid
		) as t2 ON t2.uid = t1.uid
  GROUP BY firstname`

    connection.query(selectQuery2, [id, id, id], (error2, results2) => {
      if (error2) { throw error2 }
      // console.log(results2)
      let avgPrice = results2.map((avgPrice) => {
        // console.log(avgPrice.avgPrice)
        return ([Number(avgPrice.avgPrice), avgPrice.firstName])
      })
      paymentQuery = `SELECT * FROM payments WHERE hid IN (SELECT household.id FROM household INNER JOIN users on users.id = household.uid WHERE users.id = ?)`
        connection.query(paymentQuery, [id], (error3, results3) => {
          var rid = results3.map((payment) => {
            let payment1 = payment.amount
            let hid = payment.hid
            return ({ payment1, hid })
          })
          console.log("rid is")
          console.log(rid)
          let payment2 = rid.map((roommate, i) => {
            // console.log(avgPrice[i][0])
            // console.log(rid)
            return ({
              totalOwed: Number(avgPrice[i][0] -= roommate.payment1),
              firstName: avgPrice[i][1]
            })
          })
          console.log("payment2 is")
          console.log(payment2)
          res.json(
            { totalOwed: payment2 }
        )
      })
    })
  })
})
router.post('/logout', (req, res) => {
  if (error) { throw error }
  res.json("logoutSuccess")
})

module.exports = router;