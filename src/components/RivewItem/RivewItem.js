import React from 'react';

const RivewItem = (props) => {
    const { name, price, quantity, key } = props.product;
    const { handaleRemove } = props;
    return (
        <div className="product">
            <div>
                <h4 className="product-name">{name}</h4>
                <p>Price: ${price}</p>
                <p>Quantity: {quantity}</p>
                <button onClick={() => handaleRemove(key)} className="btn-regular">Remove</button>
            </div>
        </div>
    );
};

export default RivewItem;