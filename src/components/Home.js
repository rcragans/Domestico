import React, { Component } from 'react';
import Welcome from './Welcome'
import Register from './Register'

class Home extends Component {
    constructor() {
        super()
        this.state ={}
    }

    render() {
        return (
            <div className="col s12 home">
                <Welcome />
                <Register />
            </div>
        )
    }
}

export default Home

