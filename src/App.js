import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/LogIn';
//import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      accountBalance: 14568.27,
      currentUser: {
        userName: 'bob_loblaw',
        memberSince: '08/23/99',
      }
    }
  }

  render() {
    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
    const UserProfileComponent = () => (
        <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}  />
    );
    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} {...this.props}/>)
    return (
      <Router>
        <Routes>
        <Route path="/login" element = {<LogIn />}/>
        <Route exact path = "/Home" element = {HomeComponent}/>
        <Route exact path = "/userProfile" element = {UserProfileComponent}/>
        <Route exact path = "/logIn" element = {LogInComponent}/>
        </Routes>
    </Router>
    );
  }
}

export default App;