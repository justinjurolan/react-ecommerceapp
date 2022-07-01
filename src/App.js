import Home from './views/Home';
import {Navigate, Routes, Route } from 'react-router-dom';
import Shop from './views/Shop';
import About from './views/About';
import Cart from './views/Cart';
import Contact from './views/Contact';
import Items from './Items.json';
import Checkout from './components/cart-components/Checkout';
import { useReducer, useEffect, createContext } from 'react';
import AddItem from './views/AddItem';
import { v4  as uuidv4  } from 'uuid';
import OrderHistory from './views/OrderHistory';


const reducer = (state, action) => {
  if (action.type === 'ADD_CART') {
    let index = state.itemData.findIndex((item) => item.id === action.payload);
    state.itemData[index].quantity += 1;
    state.itemData[index].status = "Pending";
    let pendingCart = state.itemData.filter(
      (item) => item.status === 'Pending'
    );
   
    return { ...state, cart: pendingCart };
  }

  if (action.type === 'REMOVE_ITEM') {
    let cartCopy = [...state.cart];
    cartCopy = cartCopy.filter((cartItem) => {
      return cartItem.id !== action.payload;
    });
    return {
      ...state,
      cart: cartCopy,
    };
  }

  if (action.type === 'ADD_QUANTITY') {
    let item = action.payload;
    let cartCopy = [...state.cart];

    if (cartCopy) {
      item.quantity += 1;
    }

    return {
      ...state,
      cart: cartCopy,
    };
  }

  if (action.type === 'SUB_QUANTITY') {
    let item = action.payload;
    let cartCopy = [...state.cart];

    if (cartCopy) {
      item.quantity--;
    }
    if (item.quantity === 0) {
      cartCopy = cartCopy.filter((cartItem) => {
        return cartItem.id !== item.id;
      });
    }

    return {
      ...state,
      cart: cartCopy,
    };
  }

  if (action.type === 'ADD_ITEM') {
    return {
      ...state,
      itemData: [
        ...state.itemData,
        {
          name: action.payload.name,
          id: uuidv4(),
          image: action.payload.image,
          category: action.payload.category,
          description: '',
          onSale: false,
          salePrice: null,
          origPrice: action.payload.price,
          status: '',
          quantity: 0,
        },
      ],
    };
  }

  if (action.type === 'PURCHASED') {
    const newState = { ...state };
    newState.orderHistory = [ ...newState.orderHistory, ...newState.cart ];
    const newItems = newState.itemData.map((item) => ({ ...item, status: '', quantity: 0 }));

    return {
      ...newState,
      itemData: newItems,
      cart: []
    };

  }


};


export const OrderHistoryContext = createContext([]);
export const CartContext = createContext([]);
 
function App() {
  const [state, dispatch] = useReducer(reducer, {
    itemData: [...Items],
    cart: [],
    orderHistory: [],
  });


  useEffect(()=>{
    console.log(state.cart);
  },[state.cart])

  return (
    
    <OrderHistoryContext.Provider value={state.orderHistory}>
      <CartContext.Provider value={state.cart}>
      <Routes>
        <Route path="/Shop" element={<Navigate to="/Shop/ALL" />} />
        <Route
          path="/"
          element={<Home itemData={state.itemData} cart={state.cart.length} dispatch={dispatch} />}
        ></Route>
        <Route
          path="/Shop/:category"
          element={<Shop itemData={state.itemData} dispatch={dispatch} />}
        ></Route>
        <Route path="/About" element={<About />}></Route>
        <Route
          path="/Cart"
          element={<Cart dispatch={dispatch} />}
        ></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/Cart/Checkout" element={<Checkout dispatch={dispatch}/>} ></Route>
        <Route path="/AddItem" element={<AddItem dispatch={dispatch} />}></Route>
        <Route path="/OrderHistory" element={
          
            <OrderHistory />
        }></Route>

        <Route
          path="/cart/checkout"
          element={<Checkout />}
        ></Route>
        <Route
          path="/AddItem"
          element={<AddItem dispatch={dispatch} />}
        ></Route>
      </Routes>
      </CartContext.Provider>
      </OrderHistoryContext.Provider>
  );
}

export default App;
