import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import NavBar from './components/NavBar';
import Register from './components/Register'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Roommate from './components/Roommate'
import Expense from './components/Expense'
import Payment from './components/Payment'
import Logout from './components/Logout'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <div className="container">
            <Route exact path="/" component={Home} />
            <Route exact path ="/register" component={Register} />
            <Route exact path ="/login" component={Login} />
            <Route exact path ="/dashboard" component={Dashboard} />
            <Route exact path ="/roommates" component={Roommate} />
            <Route exact path ="/expenses" component ={Expense} />
            <Route exact path ="/payments" component ={Payment} />
            <Route exact path ="/logout" component={Logout} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
