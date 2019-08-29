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

  it.skip('should call addPurchaseToState with a new purchase object', () => {
    const newPurchase = {
      imgUrl: 'ello',
      name: 'guvna',
      price: 'biscuit',
      description: 'for ya?'
    }
    wrapper.instance().addPurchase()
    expect(wrapper.props().addPurchaseToState).toHaveBeenCalled()
  });

  it('should clear state when clearForm is called',() => {
    wrapper.instance().clearForm()
    expect(wrapper.state()).toEqual({"description": "", "imgUrl": "", "name": "", "price": ""})
  });
});