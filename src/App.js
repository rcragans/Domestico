import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import NavBar from './components/NavBar';
import Register from './components/Register'
import Login from './components/Login'

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
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
