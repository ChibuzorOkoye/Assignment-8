import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import AccountBalance from './AccountBalance';

class Debit extends Component
{
    constructor() {
        super();
    
        this.state = {
            dArr: []
        }
        this.getDebitAPi()
      }

    getDebitAPi()
    {
        const url = 'https://moj-api.herokuapp.com/debits'
        axios.get(url).then((response) =>
        {
            const debitData = response.data
            for(let i = 0; i < debitData.length; i++)
            {
                const newDebitObj = {
                    id: debitData[i].id,
                    desc: debitData[i].description,
                    amount: debitData[i].amount,
                    date: debitData[i].date
                };
                this.state.dArr.push(newDebitObj)
            }
            
            
            //console.log(this.state.dArr)
        }).catch((err) => console.log(err));
       
    }
    
    changeDesc(event)
    {
        this.setState({desc: event.target.value})
        //console.log(this.state.DebitInfo.desc)
    }


    changeAmount(event)
    {
        this.setState({amount: event.target.value})
      //  console.log(this.state.DebitInfo.desc)
    }
    // changeBal()
    // {
    //     let newDebits = [...this.state.DebitInfo];
    //     newDebits.push({desc, amount, date})
    //     console.log(newDebits);
   
    // }


    render()
    {
        return(
        <div>
            <img className = "photo" src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/9108/bank-clipart-md.png" alt="bank"/>            <h1>Bank of React</h1>
            <Link to="/">Home</Link>
            <Link to="/credit">Credit</Link>
            <Link to="/userProfile">Profile</Link>
            <AccountBalance accountBalance={this.props.accountBalance}/>
            <input type="text" placeholder='NameOfCharge' onChange={this.changeDesc}/> 
            <input type="number" placeholder='Amount' onChange={this.changeAmount}/> 
            <button>Submit</button> 
        </div>
        )
    }
}
export default Debit