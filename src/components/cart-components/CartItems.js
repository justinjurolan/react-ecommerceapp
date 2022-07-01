import React from 'react';
import './ShoppingCart.css';
import { Link } from 'react-router-dom';

export default function CartItems({ items, dispatch }) {

  const itemsPrice = items.reduce(
    (prev, current) => prev + current.origPrice * current.quantity,
    0
  );

  return (
    <>
      <section className="cart-items">
        <div className="cart-items-container">
          <div className="cart-items-header">
            <form>
              <table className="cart-table">
                <thead>
                  <tr className="cart-title">
                    <th className='empty1'>&nbsp;</th>
                    <th className='empty2'>&nbsp;</th>
                    <th className="cart-product">PRODUCT</th>
                    <th className="cart-price">PRICE</th>
                    <th className="cart-quantity">QUANTITY</th>
                    <th className="cart-subtotal">SUBTOTAL</th>
                  </tr>
                </thead>

                {/*The START  */}

                <tbody>
                  {items.map((item) => {
                    return (
                      <tr className="cart-items-list" key={item.id}>
                        <td>
                          <img
                            className="cart-delete-img"
                            onClick={() =>
                              dispatch({
                                type: 'REMOVE_ITEM',
                                payload: item.id,
                              })
                            }
                            width="20px"
                            src="https://cdn-icons-png.flaticon.com/512/1828/1828945.png"
                            alt="close-btn"
                          ></img>
                        </td>
                        <td>
                          <img
                            width="50px"
                            src={item.image}
                            alt="product-item"
                            className="cart-item-images"
                          ></img>
                        </td>
                        <td data-label="PRODUCT:">{item.name}</td>
                        <td data-label="PRICE:">₱{item.origPrice}.00</td>
                        <td data-label="QUANTITY:">
                          <div>
                            <button
                              className="cart-btn__"
                              type="button"
                              onClick={() =>
                                dispatch({
                                  type: 'ADD_QUANTITY',
                                  payload: item,
                                })
                              }
                            >
                              +
                            </button>
                            <label className="cart-qty">{item.quantity}</label>
                            <button
                              className="cart-btn__"
                              type="button"
                              onClick={() =>
                                dispatch({
                                  type: 'SUB_QUANTITY',
                                  payload: item,
                                })
                              }
                            >
                              -
                            </button>
                          </div>
                        </td>
                        <td data-label="SUBTOTAL:">
                          ₱{item.origPrice * item.quantity}.00
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div className="cart-item-coupon">
                {/* <div className="cart-item-coupon__">
                  <input
                    type="text"
                    placeholder="COUPON CODE"
                    className="coupon-input"
                  />
                  <button className="apply-coupon">APPLY COUPON</button>
                </div> */}
                <div className="cart-item-updatecart">
                  <button className="update-cart">EMPTY CART</button>
                </div>
              </div>
            </form>
            <div className="cart-total-section">
              <div className="cart-total-container">
                <h2>Cart Totals</h2>
                <table className="cart-total-table">
                  <tbody>
                    <tr>
                      <th className="cart-table-subtotal">SUBTOTAL</th>
                      <td>₱{itemsPrice}.00</td>
                    </tr>
                    <tr>
                      <th className="cart-table-shipping">SHIPPING</th>
                      <td>
                        <ul>
                          <li>
                            <input type="radio" name="shipping" />
                            <label htmlFor="">FLAT RATE: $5.00</label>
                          </li>
                          <li>
                            <input type="radio" name="shipping" />
                            <label htmlFor="">FREE SHIPPING</label>
                          </li>
                        </ul>
                        <p>CHANGE ADDRESS</p>
                      </td>
                    </tr>
                    <tr>
                      <th className="cart-table-tax">TAX</th>
                      <td>$0.00</td>
                    </tr>
                    <tr>
                      <th className="cart-table-total">TOTAL</th>
                      <td>₱{itemsPrice}.00</td>
                    </tr>
                  </tbody>
                </table>
                <div className="cart-table-checkout">
                
                    <Link to ="/cart/checkout">PROCEED TO CHECKOUT</Link>
                
                </div>
              </div>
            </div>
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
