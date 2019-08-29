import React from 'react';
import Card from '../Card/Card'

const CardContainer = ({ purchases }) => {
  const cards = purchases.map(purchase => {
    return <Card 
        img={purchase.img}
        name={purchase.name}
        description={purchase.description}
        price={purchase.price}
        key={purchase.id}
      />
  })
  return (
    cards
  )
}

export default CardContainer;