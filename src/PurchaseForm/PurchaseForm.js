import React, { Component } from 'react';

export class PurchaseForm extends Component {
  constructor() {
    super();
    this.state = {
      imgUrl: '',
      name: '',
      price: '',
      description: ''
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <form>
        <input
          type='text'
          name='imgUrl'
          placeholder='Img Url Here'
          value={this.state.imgUrl}
          onChange={this.handleChange}
          />
          <input
          type='text'
          name='name'
          placeholder='Name of purchase'
          value={this.state.name}
          onChange={this.handleChange}
          />
          <input
          type='text'
          name='description'
          placeholder='Description'
          value={this.state.description}
          onChange={this.handleChange}
          />
          <input
          type='text'
          name='price'
          placeholder='Price'
          value={this.state.price}
          onChange={this.handleChange}
          />
          <button>Add Purchase</button>
      </form>
    )
  }
}

export default PurchaseForm;