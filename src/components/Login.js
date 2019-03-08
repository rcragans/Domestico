import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import loginAction from '../actions/loginAction'
import SweetAlert from 'sweetalert-react'
import 'sweetalert/dist/sweetalert.css'
import Swal from 'sweetalert2'


class Login extends Component {
    constructor() {
        super()
        this.state = {
            msg: "",
            showAlert: false,
            title:"",
            text:""
        }
    }

    componentWillReceiveProps(newProps) {
        if (newProps.login.msg === "badEmail") {
            this.setState({
                showAlert: true,
                title: "Email not found.",
                text: "Email is not registered, please register or use a different email."
            })

        } else if (newProps.login.msg === "badPassword") {
            this.setState({
                showAlert: true,
                title: "Incorrect Password",
                text: "This password does not match the email. Please try again."
            })
        } else if (newProps.login.msg === "loginSuccess") {
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000
              });
              
              Toast.fire({
                type: 'success',
                title: 'Signed in successfully'
              })
            this.props.history.push('/dashboard')
        }
    }

    loginSubmit = (event) => {
        event.preventDefault()
        const email = event.target[0].value
        const password = event.target[1].value
        this.props.loginAction({
            email,
            password
        })
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
                <div className="login container" >
                    <div className="row">
                        <h4>Login</h4>
                        <form className="col s12" onSubmit={this.loginSubmit}>
                            <div className="row">
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">email</i>
                                    <input id="icon_email" type="email" name="email" className="validate" />
                                    <label htmlFor="icon_email">Email</label>
                                </div>
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">lock</i>
                                    <input id="icon_prefix" type="password" name="password" className="form-control" />
                                    <label htmlFor="icon_prefix">Password</label>
                                </div>
                                <div>
                                    <button className="btn green darken-2 waves-effect waves-light" type="submit" name="action">Login
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
        login: state.login
    }
}
function mapDispatchtoProps(dispatcher) {
    return bindActionCreators({
        loginAction: loginAction
    }, dispatcher)
}


export default connect(mapStatetoProps, mapDispatchtoProps)(Login)

