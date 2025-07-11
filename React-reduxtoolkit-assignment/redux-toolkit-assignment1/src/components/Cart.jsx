
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem } from '../features/cart/cartSlice';

const Cart = () => {
  const { items, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  
  const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 }
  ];

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      
      <div className="products-section">
        <h3>Products</h3>
        <ul>
          {products.map(product => (
            <li key={product.id}>
              {product.name} - ${product.price}
              <button onClick={() => dispatch(addItem(product))}>
                Add to Cart
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="cart-section">
        <h3>Your Cart</h3>
        {items.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
            <ul>
              {items.map(item => (
                <li key={item.id}>
                  {item.name} - ${item.price} x {item.quantity}
                  <button onClick={() => dispatch(removeItem(item.id))}>
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <p className="total">Total: ${total.toFixed(2)}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;