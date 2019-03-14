import React, { Component } from 'react';
import DashTable from './DashTable'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import dashboardAction from '../actions/dashboardAction'


class Dashboard extends Component {
    constructor() {
        super()
        this.state = {}
    }
    componentDidMount() {
        this.props.dashboardAction({
            token: this.props.login.token
        })
    }

    render() {
        if(this.props.dashboard !==null){
        var dashboard = this.props.dashboard.totalOwed.map((roommate, i) => {
            var firstName = roommate.firstName
            var avgPrice = roommate.totalOwed
            return(
            <DashTable key={i} firstName={firstName} avgPrice= {avgPrice} history={this.props.history} />
            )
        })
        }
        
            return (
                <div>
                    <h2>{this.props.login.firstName}'s Dashboard</h2>
                    <table className="highlight centered bordered">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Owes</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dashboard}
                        </tbody>
                    </table>
                </div>
            )
        }
    }


function mapStateToProps(state) {
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

export default connect(mapStateToProps, mapDispatchtoProps)(Dashboard);