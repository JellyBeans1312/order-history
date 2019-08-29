import React, { Component } from 'react';

class PurchaseForm extends Component {
  constructor() {
    super();
    this.state = {
      imgUrl: '',
      name: '',
      price: '',
      description: ''
    }
  }

  render() {
    return (
      <form>
        <input
          type='text'
          name='imgUrl'
          placeholder='Img Url Here'
          value={this.state.imgUrl}
          />
          <input
          type='text'
          name='name'
          placeholder='Img Url Here'
          value={this.state.name}
          />
          <input
          type='text'
          name='description'
          placeholder='Img Url Here'
          value={this.state.description}
          />
          <input
          type='text'
          name='price'
          placeholder='Img Url Here'
          value={this.state.price}
          />
          <button>Add Purchase</button>
      </form>
    )
  }
}

export default PurchaseForm;