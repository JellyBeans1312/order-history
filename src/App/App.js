import React, { Component } from 'react';
import './App.css';
import CardContainer from '../CardContainer/CardContainer';
import { PurchaseForm } from '../PurchaseForm/PurchaseForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      purchases: [],
      error: ''
    }
  }

  addPurchase = newPurchase => {
    this.setState({ purchases: [...this.state.purchases, newPurchase] })
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/purchases')
    .then(res => res.json())
    .then(purchases => this.setState({ purchases }))
    .catch(error => this.setState({error: 'There was an issue gathering your purchases'}))
  }
  render() {
    return (
      <div className="App">
        <header>
          <h1 className='app-title'>My Order History</h1>
          <div className='purchase-form'>
            <PurchaseForm addPurchaseToState={this.addPurchase}/>
          </div>
        </header>
        {this.state.error && <h1>{this.state.error}</h1>}
        <div className='purchase-container'>
          <CardContainer purchases={this.state.purchases}/>
        </div>
      </div>
    );
  }
}

export default App;
