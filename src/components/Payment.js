import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import paymentAction from '../actions/paymentAction'
import SweetAlert from 'sweetalert-react'
import 'sweetalert/dist/sweetalert.css'

class Payment extends Component{
    constructor(){
        super()
        this.state={
            msg:"",
            showAlert:false,
            title:"",
            text:""
        }
    }
    componentWillReceiveProps(newProps){
        if (newProps.payment.msg === "paymentAdded"){
            this.setState({
                showAlert:true,
                title:"Payment Added",
                text: "Payment has been succesfully added!"
            })
        }
    }
    paymentSubmit = (event)=>{
        event.preventDefault()
        const roommateName = event.target[0].value
        const amount = event.target[1].value
        const date = event.target[2].value
        this.props.paymentAction({
            roommateName,
            amount,
            date
        })
    }

    render(){
        return(
            <main>
                <SweetAlert
                    show={this.state.showAlert}
                    title={this.state.title}
                    text={this.state.text}
                    onConfirm={() => this.setState({ showAlert: false })}
                />
                <div className="register container" >
                    <div className="row">
                        <h4>Add Payment</h4>
                        <form className="col s12" onSubmit={this.paymentSubmit}>
                            <div className="row">
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">account_circle</i>
                                    <input id="icon_prefix" type="text" name="roommateName" className="validate" />
                                    <label htmlFor="icon_prefix">Roommate</label>
                                </div>
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">attach_money</i>
                                    <input id="icon_prefix" type="text" name="amount" className="validate" />
                                    <label htmlFor="icon_prefix">Amount</label>
                                </div>
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">date_range</i>
                                    <input id="icon_email" type="date" name="date" className="validate" />
                                    <label htmlFor="icon_email">Date</label>
                                </div>
                                <div>
                                    <button className="btn green darken-2 waves-effect waves-light" type="submit" name="action">Add Payment
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
        payment: state.payment
    }
}
function mapDispatchtoProps(dispatcher) {
    return bindActionCreators({
        paymentAction: paymentAction
    }, dispatcher)
}


export default connect(mapStatetoProps, mapDispatchtoProps)(Payment)