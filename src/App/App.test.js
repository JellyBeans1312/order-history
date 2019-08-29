import React from 'react';
import { shallow } from 'enzyme'
import App from './App';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <App />
    )
  })
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot() 
  });

  it('should addPurchase to purchaes array', () => {
    const mockPurchase = {
      id: 5, 
      name: 'gary', 
      description: 'im gary',
      price: '100000'
    }
    expect(wrapper.state('purchases').length).toEqual(0)
    wrapper.instance().addPurchase(mockPurchase)
    expect(wrapper.state('purchases').length).toEqual(1)
  });

  it('should')
});