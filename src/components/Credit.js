import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import AccountBalance from './AccountBalance';

class Credit extends Component
{
    constructor() {
        super();
    
        this.state = {
            cArr:[]
        }
        this.getCreditAPi()
      }

   
    getCreditAPi()
    {
        const url = 'https://moj-api.herokuapp.com/credits'
        axios.get(url).then((response) =>
        {
            const creditData = response.data
            for(let i = 0; i < creditData.length; i++)
            {
                const newCreditObj = {
                    id: creditData[i].id,
                    desc: creditData[i].description,
                    amount: creditData[i].amount,
                    date: creditData[i].date
                };
                this.state.cArr.push(newCreditObj)
            }
            
            
            console.log(this.state.cArr[7])

        }).catch((err) => console.log(err));

    }

    changeDesc(event)
    {
        this.setState({desc: event.target.value})
       // console.log(this.state.DebitInfo.desc)
    }


    changeAmount(event)
    {
        this.setState({amount: event.target.value})
        //console.log(this.state.DebitInfo.desc)
    }

    // changeBal()
    // {
    //     let newCredit = [...this.state.creditInfo];
    //     newDebits.push({desc, amount, date})
    //     console.log(newCredits);

    // }


    render()
    {
        console.log(this.state.cArr)
        console.log(this.state.length)
        return(
            
        <div>
             <img className = "photo" src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/9108/bank-clipart-md.png" alt="bank"/>
            <h1>Bank of React</h1>
            <Link to="/">Home</Link>
            <Link to="/debit">Debit</Link>
            <Link to="/userProfile">Profile</Link>
            <AccountBalance accountBalance={this.props.accountBalance}/>

            <input type="text" placeholder='NameOfCharge' onChange={this.changeDesc}/> 
            <input type="number" placeholder='Amount' onChange={this.changeAmount}/> 
            <button>Submit</button> 

        <p></p>

        </div>
        )
    }
}
export default Credit