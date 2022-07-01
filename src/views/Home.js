import { Fragment } from "react";
import Footer from "../components/Footer";
import NewArrivals from "../components/home-components/NewArrivals";
import NewsLetter from "../components/home-components/NewsLetter";
import Header from "../components/Header";
import Shopnow from "../components/home-components/Shopnow"
import HomeBanner from "../components/home-components/HomeBanner";


const Home = ({itemData, dispatch ,cart}) => {
    
    return (
        <Fragment>
            <Header cartItem={cart}/>
            <HomeBanner/>
            <Shopnow/>
            <NewArrivals itemData={itemData} dispatch={dispatch}/>
            <NewsLetter/>
            <Footer/>
        </Fragment>
    )
    
}

export default Home;