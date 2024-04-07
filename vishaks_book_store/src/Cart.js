import React from 'react';

function Cart({ cartItems }) {
    const totalPrice = cartItems.reduce((total, book) => total + book.price, 0);
  
    return (
      <div className="cart">
        <h2>Your Cart</h2>
        <div className="total-info">Total Items: {cartItems.length}</div>
        <div className="total-info">Total Price: ${totalPrice}</div>
        {cartItems.map((item, index) => (
          <div className="item-name" key={index}>
            {item.name} - ${item.price}
          </div>
        ))}
      </div>
    );
  }
  

export default Cart;
