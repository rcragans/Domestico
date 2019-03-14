import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import paymentAction from '../actions/paymentAction'
import SweetAlert from 'sweetalert-react'
import 'sweetalert/dist/sweetalert.css'
import Swal from 'sweetalert2'
import getRoommateAction from '../actions/getRoommateAction'

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

componentDidUpdate(){

}


componentDidMount(){
      this.props.getRoommateAction({ token: this.props.login.token })  
}

    componentWillReceiveProps(newProps){
        if (newProps.payment.msg === "paymentAdded"){
            this.setState({
                showAlert:true,
                title:"Payment Added",
                text: "Payment has been succesfully added!"
            })
        }
        setTimeout(()=>{
                var elems = document.querySelectorAll('select');
                var instances = window.M.FormSelect.init(elems);
        },1000)
        
    }
    paymentSubmit = (event)=>{
        event.preventDefault()
        const amount = event.target[2].value
        const date = event.target[3].value
        const name = document.getElementById("selectName").value
        if (amount === "" || date === "") {
            Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: 'All fields are required.',
            })
        }else {
            this.props.paymentAction({
                amount,
                date,
                hid: this.props.roommate.id,
                token: this.props.login.token,
                name
            })
        }
    }

    render(){
        
        var roommates = this.props.roommate.map((roommate, i) =>{
            
            return(
            <option key={i} value={roommate.firstName}>{roommate.firstName}</option>
        
            ) 
        })
    
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
                            <div className="input-field col s12">
                                <select name="name" id="selectName">
                                    <option value="" disabled defaultValue>Choose Roommate</option>
                                    {roommates}
                                </select>
                                <label>Roommate</label>
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
        payment: state.payment,
        login: state.login,
        roommate: state.roommate
    }
}
function mapDispatchtoProps(dispatcher) {
    return bindActionCreators({
        paymentAction: paymentAction,
        getRoommateAction: getRoommateAction
    }, dispatcher)
}


export default connect(mapStatetoProps, mapDispatchtoProps)(Payment)