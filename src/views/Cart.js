import ShoppingCart from '../components/cart-components/ShoppingCart';
import CartItems from '../components/cart-components/CartItems';
import EmptyCart from '../components/cart-components/EmptyCart';

import { Fragment, useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { CartContext } from '../App';

const Cart = ({ dispatch }) => {
  const cart = useContext(CartContext)
  return (
    <Fragment>
      <Header />
      <ShoppingCart />
      {cart.length > 0 ? (
        <CartItems items={cart} dispatch={dispatch} />
      ) : (
        <EmptyCart />
      )}

      <Footer />
    </Fragment>
  );
};

export default Cart;
