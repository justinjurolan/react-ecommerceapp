import React from 'react';
import './ShoppingCart.css';
import { Link } from 'react-router-dom';

export default function EmptyCart() {
  return (
    <>
      <section className="empty-cart">
        <div className="empty-cart-container">
          <div className="empty-cart__second">
            <div className="empty-cart-img">
              <img
                alt="check"
                width="20px"
                src="https://cdn-icons-png.flaticon.com/512/0/845.png"
              ></img>
            </div>
            <div>
              <p>YOUR CART IS CURRENTLY EMPTY.</p>
            </div>
          </div>
          <div className="empty-cart__button">
            <p className="empty-cart-btn">
              <Link to='/Shop/ALL' className="empty-cart-btn">
                RETURN TO SHOP
             </Link>
            </p>
          </div>
          <div className="empty-cart-image">
            <img
              className="cart-image-box"
              alt="bank-img"
              src="https://elementorecommercetutorial.com/wp-content/uploads/2020/08/toppng.com-safe-checkout-icons-portable-network-graphics-670x1771-1.png"
            ></img>
          </div>
        </div>
      </section>
    </>
  );
}
