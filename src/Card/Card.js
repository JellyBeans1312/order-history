import React from 'react';

const Card = ({ img, name, description, price }) => {
  return (
    <article>
      <img src={img} alt='item image'/>
      <h1>{name}</h1>
      <p>{description}</p>
      <p>{price}</p>
    </article>
  )
}

export default Card;