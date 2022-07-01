import React from 'react';

export default function Cart() {
  return (
    <>
      <section className="cart">
        <div className="cart-container">
          <div className="cart-header">
            <h1>CART</h1>
          </div>
          <div className="cart-title">
            <p>
              Sale up to <span>50% Biggest Discounts.</span> Use Code Darrell10
              for 10% OFF!
            </p>
          </div>
          <div className="cart-status">
            <div>
              <p className="shop-cart">1. Shopping Cart</p>
            </div>
            <div>
              <p className="checkout">2. Checkout</p>
            </div>
            <div>
              <p className="complete">3. Order Complete !</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
