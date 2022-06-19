import React from 'react'
import "./Product.css"

const Product = ({title , image , price , rating}) => {
  return (
    <div className="Product">
        <div className="Product-info">
        <p>{title}</p>
        <p className='Product-price'><strong>${price}</strong></p>
        </div>
        
        <div className="Product-rating">
           {Array(rating).fill().map((_, i) => ( <p>⭐</p> ))}
        </div>

        <img src={image} alt="Book"/>

        <button>Add to Basket</button>
    </div>
  )
}

export default Product