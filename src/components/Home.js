import React, { Component } from 'react';
import NavBar from './NavBar'
import Welcome from './Welcome'
import Register from './Register'

class Home extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div className="col s12 home">
                <NavBar />
                <Welcome />
                <Register />
            </div>
        )
    }
}

export default Home

