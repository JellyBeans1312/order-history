import React, { Component } from 'react';
import './App.css';

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
    console.log(this.state.purchases);
    
    return (
      <div className="App">
        <header>
          <h1 className='app-title'>My Order History</h1>
          <div className='purchase-form'>

          </div>
        </header>
        <div className='purchase-container'>

        </div>
      </div>
    );
  }
}

export default App;
