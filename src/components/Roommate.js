import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import roommateAction from '../actions/roommateAction'
import SweetAlert from 'sweetalert-react'
import 'sweetalert/dist/sweetalert.css'
import Swal from 'sweetalert2'
import RoommateTable from './RoommateTable'
import getRoommateAction from '../actions/getRoommateAction'


class Roommate extends Component {
    constructor() {
        super()
        this.state = {
            msg: "",
            showAlert: false,
            title: "",
            text: ""
        }
    }

    componentDidMount() {
        this.props.getRoommateAction({ token: this.props.login.token })
    }

    componentWillReceiveProps(newProps) {

        if (newProps.roommate.msg === "roommateAdded") {
            this.setState({
                showAlert: true,
                title: "Roommate Added",
                text: "Roommate has been succesfully added!"
            })
        }else if(newProps.roommate.msg === "roommateDeleted"){
            this.setState({
                showAlert: true,
                title: "Roommate Deleted",
                text: "Roommate has been succesfully deleted!"
            })
        }
        console.log(newProps.roommate)
        if(this.props.roommate.length !== newProps.roommate.length){
            this.props.getRoommateAction({ token: this.props.login.token })
        }
    }

    roommateSubmit = (event) => {
        event.preventDefault()
        const firstName = event.target[0].value
        const lastName = event.target[1].value
        const email = event.target[2].value
        if (firstName === "" || lastName === "" || email === "") {
            Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: 'All fields are required.'
            })
        } else {
            this.props.roommateAction({
                firstName,
                lastName,
                email,
                token: this.props.login.token
            })
        }
    }

    render() {
        if(this.props.roommate.length){
        var roommates = this.props.roommate.map((roommate, i) =>
            <RoommateTable key={i} roommate={roommate} history={this.props.history} />
        )}
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
                <table className="highlight centered bordered">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {roommates}
                    </tbody>
                </table>
            </main>
        )
    }
}

function mapStatetoProps(state) {
    return {
        roommate: state.roommate,
        login: state.login
    }
}
function mapDispatchtoProps(dispatcher) {
    return bindActionCreators({
        roommateAction: roommateAction,
        getRoommateAction: getRoommateAction
    }, dispatcher)
}


export default connect(mapStatetoProps, mapDispatchtoProps)(Roommate)