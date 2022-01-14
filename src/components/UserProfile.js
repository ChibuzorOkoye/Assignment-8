import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import AccountBalance from './AccountBalance';

class UserProfile extends Component {
  render() {
    return (
        <div>
           <img className = "photo" src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/9108/bank-clipart-md.png" alt="bank"/>
          <h1>Bank of React</h1>
          <h3>User Profile</h3>
          <Link to="/">Home</Link>
          <Link to="/debit">Debit</Link>
          <Link to="/credit">Credit</Link>
          <div>Username: {this.props.userName}</div>
          <div>Member Since: {this.props.memberSince}</div>        
          <AccountBalance accountBalance={this.props.accountBalance}/>
        </div>
    );
  }
}

export default UserProfile;