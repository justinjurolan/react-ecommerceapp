import {Link} from 'react-router-dom';
import './Shopnow.css';

export default function Shopnow() {
  return (
    <>
      <section className="shop-now">
        <div className="shop-now__container">
          <div className="shop-now__row">
            <div className="shop-now__womens">
              <div className="shop-now__womens__">
                <h3>
                  Womens
                  <br></br>
                  Section
                </h3>
              </div>
              <div>
                <p>Checkout This Weeks Hottest Styles</p>
              </div>
              <div>
                <Link to ="/Shop/MENS">
                  <span>SHOP NOW</span>
                </Link>
              </div>
            </div>
            
            <div className="shop-now__mensproduct">
              <div>
                <h3>
                  Mens
                  <br></br>
                  Section
                </h3>
              </div>
              <div>
                <p>Checkout this weeks hottest styles.</p>
              </div>
              <div>
                <Link to ="/Shop/WOMENS">
                  <span>SHOP NOW</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="image-box">
        <div className="image-box-freeshipping">
          <div className="image-container">
            <img
              className="img-size"
              alt="truck"
              src="https://cdn-icons-png.flaticon.com/512/175/175461.png"
            ></img>
          </div>
          <div className="img-content">
            <h3>Free Shipping</h3>
            <p>Orders over $200</p>
          </div>
        </div>
        <div className="image-box-quickpayment">
          <div className="image-container border-left">
            <img
              className="img-size"
              alt="payment"
              src="https://cdn-icons-png.flaticon.com/512/1019/1019709.png"
            ></img>
          </div>
          <div className="img-content">
            <h3>Quick Payment</h3>
            <p>100% Secure Payment</p>
          </div>
        </div>
        <div className="image-box-gift-certificate">
          <div className="image-container border-left">
            <img
              className="img-size"
              alt="gift"
              src="https://cdn-icons-png.flaticon.com/512/837/837993.png"
            ></img>
          </div>
          <div className="img-content">
            <h3>Gift Certificate</h3>
            <p>Buy Now $500 to $1000</p>
          </div>
        </div>
        <div className="image-box-support">
          <div className="image-container border-left">
            <img
              className="img-size"
              alt="support-earphone"
              src="https://cdn-icons-png.flaticon.com/512/862/862909.png"
            ></img>
          </div>
          <div className="img-content">
            <h3>24/7 Support</h3>
            <p>Ready Support</p>
          </div>
        </div>
      </section>
    </>
  );
}
