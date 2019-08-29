import React from 'react';
import { shallow } from 'enzyme';
import CardContainer from './CardContainer';

describe('CardContainer', () => {
  let wrapper; 
  const mockPurchases = [
    {
      id: 5, 
      name: 'gary', 
      description: 'im gary',
      price: '100000'
    },
    {
      id: 9, 
      name: 'larry', 
      description: 'im larry',
      price: '1000000'
    }
  ]
  beforeEach(() => {
    wrapper = shallow(
      <CardContainer 
        purchases={mockPurchases}
      />
    )
  });
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });
});