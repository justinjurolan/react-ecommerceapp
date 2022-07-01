import './ShopSidebar.scss';
import { Link } from 'react-router-dom';

const ShopSidebar = () => {
    return(
        <div className="ShopSidebar-container">
            

            <div className="ShopSidebar-container__category">
                <h2>PRODUCT CATEGORIES</h2>

                <ul>
                    <li><Link to="/Shop/ALL">ALL</Link></li>
                    <li><Link to="/Shop/MENS">MENS</Link></li>
                    <li><Link to="/Shop/WOMENS">WOMENS</Link></li>
                </ul>

            </div>

        </div>

    )

}

export default ShopSidebar;