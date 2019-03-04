import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Welcome extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div className="container">
                <div className="welcome">
                    <div className="welcome content">
                        <p>Welcome to Domestico!</p>
                        <p>Your one stop shop for organizing and tracking expenses for your household.</p>
                        <p> Login or register below to get started.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Welcome