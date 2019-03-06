import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import loginAction from '../actions/loginAction'
import './styles/navbar.css'


class NavBar extends Component {
    constructor() {
        super()
        this.state = {
            msg: "",
            navbarClosed: false

        }
    }

    sideNav = (event) => {
        this.setState({
            navbarClosed: !this.state.navbarClosed
        })

    }



    render() {
        let rightNav = ""
        if (this.props.login.msg === "loginSuccess") {
            rightNav =
                <span>
                    <nav>

                        <div className="nav-wrapper green darken-2">
                            <li className="center brand-logo">Dome<b>stico</b></li>
                            <ul className={`green right banana ${this.state.navbarClosed ? '' : 'closed'}`}>
                                <li><Link to="/dashboard">Dashboard</Link></li>
                                <li><Link to="/roommates">Roommates</Link></li>
                                <li><Link to="/expenses">Expenses</Link></li>
                                <li><Link to="/payments">Payments</Link></li>
                                <li><Link to="/logout">Logout</Link></li>

                            </ul>
                            <div className="right">
                                <button className="waves-effect waves-light btn green" onClick={this.sideNav}>Menu</button>
                            </div>
                        </div>
                    </nav>
                </span>
        } else {
            rightNav = <span>
                <li className="center brand-logo">Dome<b>stico</b></li>
                <ul id="nav-mobile" className={`green right banana ${this.state.navbarClosed ? '' : 'closed'}`}>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                </ul>
                <div className="right">
                    <button className="waves-effect waves-light btn green" onClick={this.sideNav}>Menu</button>
                </div>
            </span>

        }
        return (
            <div className="navbar">
                <nav>
                    <div className="nav-wrapper green darken-2">
                        {rightNav}
                    </div>
                </nav>
            </div>
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

export default connect(mapStatetoProps, mapDispatchtoProps)(NavBar)
