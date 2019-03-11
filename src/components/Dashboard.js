import React, { Component } from 'react';
import DashTable from './DashTable'

class Dashboard extends Component{
    constructor(){
        super()
        this.state={}
    }
    render(){
        return(
            <div>
            <h1>Dashboard</h1>
            <DashTable  />
            </div>
        )
    }
}

export default Dashboard