import React from 'react';
import Card from '../Card/Card'

const CardContainer = ({ purchases }) => {
  const cards = purchases.map(purchase => {
    return <Card purchase={...purchase} />
  })
  return (
    {cards}
  )
}

export default CardContainer;