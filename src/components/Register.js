import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Register extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className="register container">
                <div class="row">
                    <form class="col s12">
                        <div class="row">
                            <div class="input-field col s6">
                                <i class="material-icons prefix">account_circle</i>
                                <input id="icon_prefix" type="text" class="validate"/>
                                <label for="icon_prefix">First Name</label>
                            </div>
                            <div class="input-field col s6">
                                <i class="material-icons prefix">account_circle</i>
                                <input id="icon_prefix" type="text" class="validate"/>
                                <label for="icon_prefix">Last Name</label>
                            </div>
                            <div class="input-field col s6">
                                <i class="material-icons prefix">email</i>
                                <input id="icon_telephone" type="tel" class="validate"/>
                                <label for="icon_telephone">Email</label>
                            </div>
                            <div class="input-field col s6">
                                <i class="material-icons prefix">https</i>
                                <input id="icon_prefix" type="text" class="validate"/>
                                <label for="icon_prefix">Password</label>
                            </div>
                        </div>
                    </form>
                </div> 
            </div>
        )
    }
    
}

export default Register