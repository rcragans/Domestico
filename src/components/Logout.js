import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import logoutAction from '../actions/logoutAction'
import SweetAlert from 'sweetalert-react'
import 'sweetalert/dist/sweetalert.css'
import Home from './Home'

class Logout extends Component {
    constructor() {
        super()
        this.state = {
            msg: "",
            title: "",
            text: "",
            showAlert: false
        }
    }
    render() {
        return (
            <Home />
        )
    }
}

function mapStatetoProps(state) {
    return {
        logout: state.logout
    }
}
function mapDispatchtoProps(dispatcher) {
    return bindActionCreators({
        logoutAction: logoutAction
    }, dispatcher)
}


export default connect(mapStatetoProps, mapDispatchtoProps)(Logout)