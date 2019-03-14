import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import registerAction from '../actions/registerAction'
import SweetAlert from 'sweetalert-react'
import 'sweetalert/dist/sweetalert.css'
import Swal from 'sweetalert2'

class Register extends Component {
    constructor() {
        super()
        this.state = {
            title:"",
            msg: "",
            showAlert: false
        }
    }

    componentWillReceiveProps(newProps) {
        if (newProps.register.msg === 'userExists') {
            this.setState({
                showAlert: true,
                title: "Registration Error",
                text: "Email is already registered. Login or choose a different email.",

            })
        } else if (newProps.register.msg === 'userAdded') {
            this.setState({
                showAlert: true,
                title: "Account Registered",
                text: "You have been successfully registered!",
            })
        }
    }

    registerSubmit = (event) => {
        event.preventDefault()
        const firstName = event.target[0].value
        const lastName = event.target[1].value
        const email = event.target[2].value
        const password = event.target[3].value
        if (firstName === "" || lastName === "" || email ==="" || password === "") {
            Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: 'All fields are required.',
            })
        } else {
            this.props.registerAction({
                firstName,
                lastName,
                email,
                password
            })
        }
    }

    render() {
        return (
            <main>
                <SweetAlert
                    show={this.state.showAlert}
                    title={this.state.title}
                    text={this.state.text}
                    onConfirm={() => this.setState({ showAlert: false })}
                />
                <div className="register container" >
                    <div className="row">
                        <h4>Register</h4>
                        <form className="col s12" onSubmit={this.registerSubmit}>
                            <div className="row">
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">account_circle</i>
                                    <input id="icon_prefix" type="text" name="firstName" className="validate" />
                                    <label htmlFor="icon_prefix">First Name</label>
                                </div>
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">account_circle</i>
                                    <input id="icon_prefix2" type="text" name="lastName" className="validate" />
                                    <label htmlFor="icon_prefix">Last Name</label>
                                </div>
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">email</i>
                                    <input id="icon_email" type="email" name="email" className="validate" />
                                    <label htmlFor="icon_email">Email</label>
                                </div>
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">lock</i>
                                    <input id="icon_prefix3" type="password" name="password" className="form-control" />
                                    <label htmlFor="icon_prefix">Password</label>
                                </div>
                                <div>
                                    <button className="btn green darken-2 waves-effect waves-light" type="submit" name="action">Register
                                    <i className="material-icons right">send</i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        )
    }

}

function mapStatetoProps(state) {
    return {
        register: state.register
    }
}
function mapDispatchtoProps(dispatcher) {
    return bindActionCreators({
        registerAction: registerAction
    }, dispatcher)
}


export default connect(mapStatetoProps, mapDispatchtoProps)(Register)