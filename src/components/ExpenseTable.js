import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import getExpensesAction from '../actions/getExpensesAction'
import deleteExpenseAction from '../actions/deleteExpenseAction'
import expenseAction from '../actions/expenseAction'


class ExpenseTable extends Component {
  constructor() {
    super()
    this.state = {}
  }

  deleteExpense = (event) => {
    event.preventDefault()
    this.props.deleteExpenseAction({
      id: this.props.expense.id
    })
  }

  render() {
    const expense = this.props.expense
    return (
      <tr>
        <td>
          {expense.name}
        </td>
        <td>
          {expense.date}
        </td>
        <td>
          ${expense.amount}
        </td>
        <td>
          <button onClick={this.deleteExpense} className="btn red waves-effect waves-light" type="submit" name="action">Delete
                    <i className="material-icons right">delete_forever</i>
          </button>
        </td>
      </tr>
    )
  }
}

function mapStatetoProps(state) {
  return {
    login: state.login,
  }
}
function mapDispatchtoProps(dispatcher) {
  return bindActionCreators({
    getExpensesAction: getExpensesAction,
    deleteExpenseAction: deleteExpenseAction,
    expenseAction: expenseAction
  }, dispatcher)
}


export default connect(mapStatetoProps, mapDispatchtoProps)(ExpenseTable)