import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import roommateAction from '../actions/roommateAction'
import getRoommateAction from '../actions/getRoommateAction'
import deleteRoommateAction from '../actions/deleteRoommateAction'


class RoommateTable extends Component {
    constructor() {
        super()
        this.state = {}
    }

    deleteRoommate = (event)=>{
        event.preventDefault()
        this.props.deleteRoommateAction({
            id: this.props.roommate.id
        })
    }

    render() {
        const roommate = this.props.roommate
        return (
            <tr>
                <td>{roommate.firstName}</td>
                <td>{roommate.lastName}</td>
                <td>{roommate.email}</td>
                <td>
                    <button onClick={this.deleteRoommate} className="btn red waves-effect waves-light" type="submit" name="action">Delete
                        <i className="material-icons right">delete_forever</i>
                    </button>
                </td>
            </tr>
        )
    }
}

function mapStatetoProps(state) {
    return {
        login: state.login
    }
}
function mapDispatchtoProps(dispatcher) {
    return bindActionCreators({
        roommateAction: roommateAction,
        getRoommateAction: getRoommateAction,
        deleteRoommateAction: deleteRoommateAction
    }, dispatcher)
}


export default connect(mapStatetoProps, mapDispatchtoProps)(RoommateTable)