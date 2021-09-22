import React from 'react';
import './Product.css';

const Product = (props) => {
    // console.log(props);
    const { name, price, seller, stock, img } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="product-detail">
                <h4 className="product-name">{name}</h4>
                <p><small>by: {seller}</small></p>
                <p>Price: ${price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <button onClick={() => props.handaleAddToCart(props.product)} className="btn-regular">add to cart</button>
            </div>
        </div>
    );
};

export default Product;