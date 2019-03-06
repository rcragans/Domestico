import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import roommateAction from '../actions/roommateAction'
import SweetAlert from 'sweetalert-react'
import 'sweetalert/dist/sweetalert.css'


class Roommate extends Component {
    constructor() {
        super()
        this.state = {
            msg: "",
            showAlert: false,
            title:"",
            text:""
        }
    }

    componentWillReceiveProps(newProps){
        if (newProps.roommate.msg === "roommateAdded"){
            this.setState({
                showAlert:true,
                title:"Roommate Added",
                text: "Roommate has been succesfully added!"
            })
        }
    }

    roommateSubmit = (event)=>{
        event.preventDefault()
        const firstName = event.target[0].value
        const lastName = event.target[1].value
        const email = event.target[2].value
        this.props.roommateAction({
            firstName,
            lastName,
            email
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
                <div className="register container" >
                    <div className="row">
                        <h4>Add Roommate</h4>
                        <form className="col s12" onSubmit={this.roommateSubmit}>
                            <div className="row">
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">account_circle</i>
                                    <input id="icon_prefix" type="text" name="firstName" className="validate" />
                                    <label htmlFor="icon_prefix">First Name</label>
                                </div>
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">account_circle</i>
                                    <input id="icon_prefix" type="text" name="lastName" className="validate" />
                                    <label htmlFor="icon_prefix">Last Name</label>
                                </div>
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">email</i>
                                    <input id="icon_email" type="email" name="email" className="validate" />
                                    <label htmlFor="icon_email">Email</label>
                                </div>
                                <div>
                                    <button className="btn green darken-2 waves-effect waves-light" type="submit" name="action">Add Roommate
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
        roommate: state.roommate
    }
}
function mapDispatchtoProps(dispatcher) {
    return bindActionCreators({
        roommateAction: roommateAction
    }, dispatcher)
}


export default connect(mapStatetoProps, mapDispatchtoProps)(Roommate)