import React from 'react';
import Card from '../Card/Card'

const CardContainer = ({ purchases, removePurchase }) => {
  const cards = purchases.map(purchase => {
    return <Card 
        img={purchase.img}
        name={purchase.name}
        description={purchase.description}
        price={purchase.price}
        key={purchase.id}
        id={purchase.id}        
        removePurchase={removePurchase}
      />
  });
  return (
    cards
  )
}

export default CardContainer;