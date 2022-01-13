import { Component } from 'react';
import axios from 'axios';
import Credit from './Credit';


class GetAPI extends Component 
{

    constructor() {
        super();
    
        this.state = {
          Debit: {
            id: '',
            desc: '',
            amount: '',
            date: ''
          },
          Credit:
          {
            id: '',
            desc: '',
            amount: '',
            date: ''
          }
        }
      }

    getDebitAPi()
    {
        const url = 'https://moj-api.herokuapp.com/debits'
        axios.get(url).then((response) =>
        {
            const debitData = response.data.data
            this.state.Debit = debitData
            console.log(debitData)
            
        }).catch((err) => console.log(err));

    }
    
    getCreditAPi()
    {
        const url = 'https://moj-api.herokuapp.com/credits'
        axios.get(url).then((response) =>
        {
            const creditData = response.data.data
            this.state.Credit = creditData
            console.log(creditData)

        }).catch((err) => console.log(err));

    }
}