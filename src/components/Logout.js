import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import logoutAction from '../actions/logoutAction'
// import SweetAlert from 'sweetalert-react'
import 'sweetalert/dist/sweetalert.css'
import Swal from 'sweetalert2'
import './styles/navbar.css'

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

    logoutSubmit = (event) => {
        event.preventDefault()
        const Toast = Swal.mixin({
            toast: true,
            position: 'middle-end',
            showConfirmButton: false,
            timer: 3000
        });

        Toast.fire({
            type: 'success',
            title: 'Logged out successfully'
        })
        this.props.history.push('/')
    }

    render() {
        return (
            <form className="col s12" onSubmit={this.logoutSubmit}>
                <div>
                    <button className="btn green darken-2 waves-effect waves-light logoutButton" type="submit" name="action">Logout
                            <i className="material-icons right">send</i>
                    </button>
                </div>
            </form>
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