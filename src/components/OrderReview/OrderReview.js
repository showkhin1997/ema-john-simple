import React from 'react';
import { useHistory } from 'react-router';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import RivewItem from '../RivewItem/RivewItem';

const OrderReview = () => {
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);
    const history = useHistory();

    const handaleRemove = key => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        removeFromDb(key);
    };

    const handelPlaceOrder = () => {
        history.push('/placeorder');
        setCart([]);
        clearTheCart();
    };

    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    cart.map(product => <RivewItem
                        key={product.key}
                        product={product}
                        handaleRemove={handaleRemove}
                    ></RivewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={handelPlaceOrder} className="btn-regular">Place Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default OrderReview;