import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';

class Home extends Component {
    render() {
      return (
          <div>
            <img className = "photo" src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/9108/bank-clipart-md.png" alt="bank"/>
            <h1>Bank of React</h1>

            <Link to="/logIn">Login</Link>
            <Link to="/debit">Debit</Link>
            <Link to="/credit">Credit</Link>
            <Link to="/userProfile">Profile</Link>
            <h4>Hello {this.props.userName}</h4>
            <AccountBalance accountBalance={this.props.accountBalance}/>
          </div>
      );
    }
  }
  
  export default Home;