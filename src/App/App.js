import React, { Component } from 'react';
import './App.css';
import CardContainer from '../CardContainer/CardContainer'

class App extends Component {
  constructor() {
    super();
    this.state = {
      purchases: [],
      error: ''
    }
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
