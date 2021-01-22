import React from 'react'

function Product(props) {
    console.log(props)
  return (
    <div>
        Name: {props.product.name} <br />
        Description: {props.product.description} <br />
        Price: {props.product.price} <br /><br />
    </div>
  )
}

export default Product