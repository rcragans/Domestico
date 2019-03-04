import React , {Component} from 'react'

class NavBar extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div className = "navbar">
                <nav>
                    <div className="nav-wrapper green darken-2">
                        <li className="center brand-logo">Dome<b>stico</b></li>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><a href="">Login</a></li>
                            <li><a href="">Register</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavBar