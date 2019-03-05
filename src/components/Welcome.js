import React, { Component } from 'react';

class Welcome extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div className="container">
                <div className="welcome">
                    <div className="welcome content">
                        <h3>Welcome to Domestico!</h3>
                        <p>Your one stop shop for organizing and tracking expenses for your household.</p>
                        <p> Login or register below to get started.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Welcome