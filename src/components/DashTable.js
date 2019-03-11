import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class DashTable extends Component {
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
                <th>Owes</th>
            </tr>
          </thead>

          <tbody>

          </tbody>
      </table>
        )
    }
}

export default DashTable