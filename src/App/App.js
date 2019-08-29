import React, { Component } from 'react';
import './App.css';
import CardContainer from '../CardContainer/CardContainer';
import { PurchaseForm } from '../PurchaseForm/PurchaseForm';
import { fetchPurchases, deletePurchases, postPurchases } from '../apiCalls/apiCalls'

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
    this.postPurchase(newPurchase)
  }
  
  removePurchase = id => {
    const filtered = this.state.purchases.filter(purchase => purchase.id !== id)
    this.setState({ purchases: filtered })
    this.deletePurchase(id)
  }

  postPurchase = newPurchase => {
    postPurchases(newPurchase)
    .catch(() => this.setState({ error : 'There was an issue adding your purchase'} ))
  }

  deletePurchase = id => {
    deletePurchases(id)
    .catch(() => this.setState({ error: 'There was an issue removing your purchase' }))
  }

  componentDidMount() {
    fetchPurchases()
    .then(purchases => this.setState({ purchases }))
    .catch(() => this.setState({error: 'There was an issue gathering your purchases'}))
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
          <CardContainer purchases={this.state.purchases} removePurchase={this.removePurchase}/>
        </div>
      </div>
    );
  }
}

export default App;
