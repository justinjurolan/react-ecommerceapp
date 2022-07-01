import Footer from "../components/Footer";
import Header from "../components/Header";
import PurchasedItems from "../components/orderhistory-component/PurchasedItems";
import { OrderHistoryContext } from '../App';
import { useContext } from 'react';

const OrderHistory = () => {
    const orderHistory = useContext(OrderHistoryContext)
    return(

        <>
            <Header/>
                <PurchasedItems items={orderHistory} />
            <Footer/>
        </>
    )
}

export default OrderHistory;