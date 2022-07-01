import { useContext } from 'react';
import './ShoppingCart.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../../App';
import Header from '../Header';
import Footer from '../Footer';

export default function Checkout({ dispatch }) {
  const cart = useContext(CartContext);
  const onClick = () => {
    dispatch({ type: 'PURCHASED', payload: cart });
  };

  const itemsPrice = cart.reduce(
    (prev, current) => prev + current.origPrice * current.quantity,
    0
  );
  return (
    <>
      <Header />
      <section className="cart">
        <div className="cart-container">
          <div className="cart-header">
            <h1>CHECKOUT</h1>
          </div>
          <div className="cart-title">
            <p>
              Sale up to <span>50% Biggest Discounts.</span> Use Code Darrell10
              for 10% OFF!
            </p>
          </div>
          <div className="cart-status">
            <div>
              <p className="shop-p">1. Shopping Cart</p>
            </div>
            <div>
              <p className="checkout-p">2. Checkout</p>
            </div>
            <div>
              <p className="complete-p">3. Order Complete !</p>
            </div>
          </div>
        </div>
      </section>
      <section className="checkout-section">
        <div className="checkout-container">
          <div className="empty-cart__second">
            <div className="empty-cart-img">
              <img
                alt="check"
                width="20px"
                src="https://cdn-icons-png.flaticon.com/512/815/815252.png"
              ></img>
            </div>
            <div>
              <p>HAVE A COUPON? CLICK HERE TO ENTER YOUR CODE</p>
            </div>
          </div>
          <div className="checkout-form-container">
            <div className="checkout-form">
              <h2>Billing Details</h2>
              <form>
                <div className="checkout-name">
                  <div>
                    <label>FIRST NAME *</label>
                    <input type="text" className="name-input" required />
                  </div>
                  <div className="label-lastname">
                    <label>LAST NAME *</label>
                    <input type="text" className="name-input" required />
                  </div>
                </div>
                <div className="checkout-company">
                  <label>Company Name: (OPTIONAL)</label>
                  <input type="text" required />
                </div>
                <div className="checkout-address">
                  <label>STREET ADDRESS*</label>
                  <input type="text" required />
                  <input type="text" className="street-address" />
                </div>
                <div className="checkout-town">
                  <label>TOWN/CITY*</label>
                  <input type="text" required />
                </div>
                <div className="checkout-state">
                  <label>STATE*</label>
                  <select required>
                    <option>LUZON</option>
                    <option>VISAYAS</option>
                    <option>MINDANAO</option>
                  </select>
                </div>
                <div className="checkout-zip">
                  <label>ZIP CODE*</label>
                  <input type="text" required />
                </div>
                <div className="checkout-phone">
                  <label htmlFor="">PHONE*</label>
                  <input type="text" name="" id="" required />
                </div>
                <div className="checkout-email">
                  <label htmlFor="">EMAIL ADDRESS*</label>
                  <input type="text" name="" id="" required />
                </div>
                <div className="checkout-order">
                  <label htmlFor="">Order Notes</label>
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="3"
                    required
                  ></textarea>
                </div>
              </form>
            </div>
            <div className="checkout-order-container">
              <div className="checkout-form-right">
                <h2>Your Order</h2>
                <div>
                  <table className="checkout-table">
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart.map((item) => {
                        return (
                          <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.quantity}x</td>
                            <td>
                              ₱{(item.origPrice * item.quantity).toFixed(2)}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                    <tfoot>
                      <tr>
                        <td>SUBTOTAL</td>
                        <td>&nbsp;</td>
                        <td>₱{itemsPrice.toFixed(2)}</td>
                      </tr>
                      <tr>
                        <td>Shipping</td>
                        <td>&nbsp;</td>
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
                        </td>
                      </tr>
                      <tr>
                        <td>TAX</td>
                        <td>&nbsp;</td>
                        <td>$0.00</td>
                      </tr>
                      <tr>
                        <td>TOTAL</td>
                        <td>&nbsp;</td>
                        <td>₱{itemsPrice.toFixed(2)}</td>
                      </tr>
                    </tfoot>
                  </table>
                  <div className="check-out-payment">
                    <Link to="/OrderHistory">
                      <button
                        className="button-payment"
                        type="button"
                        onClick={onClick}
                      >
                        PROCEED TO PAYMENT
                      </button>
                    </Link>
                  </div>
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
      <Footer />
    </>
  );
}
