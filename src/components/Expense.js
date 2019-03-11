import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import expenseAction from '../actions/expenseAction'
import SweetAlert from 'sweetalert-react'
import 'sweetalert/dist/sweetalert.css'
import Swal from 'sweetalert2'
import ExpenseTable from './ExpenseTable'

class Expense extends Component{
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
        if (newProps.expense.msg === "expenseAdded"){
            this.setState({
                showAlert:true,
                title:"Expense Added",
                text: "Expense has been succesfully added!"
            })
        }
    }

    expenseSubmit = (event)=>{
        event.preventDefault()
        const expenseName = event.target[0].value
        const amount = event.target[1].value
        const date = event.target[2].value
        if (expenseName === "" || amount === "" || date === "") {
            Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: 'All fields are required.',
            })
        }else {
            this.props.expenseAction({
                expenseName,
                amount,
                date
            })  
        }
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
                        <h4>Add Expense</h4>
                        <form className="col s12" onSubmit={this.expenseSubmit}>
                            <div className="row">
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">comment</i>
                                    <input id="icon_prefix" type="text" name="expenseName" className="validate" />
                                    <label htmlFor="icon_prefix">Expense Name</label>
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
                                    <button className="btn green darken-2 waves-effect waves-light" type="submit" name="action">Add Expense
                                    <i className="material-icons right">send</i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <ExpenseTable />
            </main>
        )
    }
}

function mapStatetoProps(state) {
    return {
        expense: state.expense
    }
}
function mapDispatchtoProps(dispatcher) {
    return bindActionCreators({
        expenseAction: expenseAction
    }, dispatcher)
}


export default connect(mapStatetoProps, mapDispatchtoProps)(Expense)