import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/LogIn';
import Debit from './components/Debit';
import Credit from './components/Credit';
//import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      accountBalance: 14568.27,
      currentUser: {
        userName: 'Not Defined',
        memberSince: '08/23/99',
      }
    }
  }
  mockLogIn = (logInInfo) => {
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser})
  }

  render() {
    // const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
    // const UserProfileComponent = () => (
    //     <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}  />
    // );
    // const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} {...this.props}/>)
    return (
      <Router>
        <Routes>
        <Route path = "/" element = {<Home />}/>
        <Route path = "/userProfile" element = {<UserProfile userName = {this.state.currentUser.userName} memberSince = {this.state.currentUser.memberSince}accountBalance={this.state.accountBalance} />}/>
        <Route path = "/logIn" element = {<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} {...this.props}/>}/>
        </Routes>
    </Router>
    );
  }
}

export default App;