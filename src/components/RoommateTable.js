import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class RoommateTable extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render(){
        return(
            <table className = "highlight centered bordered">
        <thead>
          <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Edit</th>
              <th>Delete</th>
          </tr>
        </thead>
        <tbody>
            <tr>
                <td>Kayla</td>
                <td>Cox</td>
                <td>Kcox925@gmail.com</td>
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

export default RoommateTable