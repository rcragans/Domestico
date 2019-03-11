import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class ExpenseTable extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render(){
        return(
            <table className = "highlight centered bordered">
        <thead>
          <tr>
              <th>Name</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Edit</th>
              <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Rent</td>
            <td>3/1/2019</td>
            <td>$1000</td>
            <td>
                <button class="btn green darken-2 waves-effect waves-light" type="submit" name="action">Edit
                    <i class="material-icons right">edit</i>
                </button>
            </td>
            <td>
                <button class="btn red waves-effect waves-light" type="submit" name="action">Delete
                    <i class="material-icons right">delete_forever</i>
                </button>
            </td>
          </tr>
        </tbody>
      </table>
        )
    }
}

export default ExpenseTable