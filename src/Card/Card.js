import React from 'react';
import './Card.css'

const Card = ({ img, name, description, price, id, removePurchase }) => {
  return (
    <article>
      <img src={img} alt='item image'/>
      <h1>{name}</h1>
      <p>{description}</p>
      <p>${price}</p>
      <p onClick={() => removePurchase(id)}>🗑</p>
    </article>
  )
}

export default Card;