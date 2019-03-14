import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import dashboardAction from '../actions/dashboardAction'



class DashTable extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render(){
        return(
          <tr>
            <td>{this.props.firstName}</td>
            <td>${this.props.avgPrice}</td>
          </tr>
        )
    }
}

function mapStatetoProps(state) {
  return {
      login: state.login,
      dashboard: state.dashboard
  }
}
function mapDispatchtoProps(dispatcher) {
  return bindActionCreators({
      dashboardAction: dashboardAction
  }, dispatcher)
}


export default connect(mapStatetoProps, mapDispatchtoProps)(DashTable)