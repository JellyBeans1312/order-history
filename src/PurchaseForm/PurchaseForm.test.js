import React from 'react';
import { shallow } from 'enzyme';
import { PurchaseForm } from './PurchaseForm';

describe('PurchaseForm', () => {
  let wrapper;
  const mockAddPurchase = jest.fn()
  // preventDefault = jest.fn()
  beforeEach(() => {
    wrapper = shallow(
      <PurchaseForm
        addPurchaseToState={mockAddPurchase}
      />
    )
  });
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot() 
  });

  it('should call addPurchase when button is clicked', () => {
    const newPurchase = {
      imgUrl: 'ello',
      name: 'guvna',
      price: 'biscuit',
      description: 'for ya?'
    }
    wrapper.instance().addPurchase = jest.fn();
    wrapper.instance().forceUpdate();
    const mockEvent = { 
      preventDefault: jest.fn() 
    };

    wrapper.find('button').simulate('click', mockEvent);

    expect(wrapper.instance().addPurchase).toHaveBeenCalledWith(mockEvent);
  });

  it('should clear state when clearForm is called',() => {
    wrapper.instance().clearForm()
    expect(wrapper.state()).toEqual({"description": "", "imgUrl": "", "name": "", "price": ""})
  });

  it('should call handle change when change happens', () => {
    
  })
});