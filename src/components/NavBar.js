import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class NavBar extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="navbar">
                <nav>
                    <div className="nav-wrapper green darken-2">
                        <li className="left brand-logo">Dome<b>stico</b></li>
                        <ul id="nav-mobile" className="right">
                            <li><Link to ="/login">Login</Link></li>
                            <li><Link to="/register">Register</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavBar