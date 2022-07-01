import {Link} from 'react-router-dom';
import { useRef } from 'react';
import './Header.scss';



const Header = ({cartItem}) => {
    let showMenu = false;
    const hamburger = useRef();
    const nav = useRef();
    const menuNav = useRef();

    const toggleMenu = () => {

        if(!showMenu){
            hamburger.current.classList.add('open');
            nav.current.classList.add('open');
            menuNav.current.classList.add('open');
            showMenu = true;
        }else{
            hamburger.current.classList.remove('open');
            nav.current.classList.remove('open');
            menuNav.current.classList.remove('open');
            showMenu= false;
        }
    
    }
    

    return(
        <div className="header-container">

            <div className="header-container__logo">
                <Link to="/"><h1>SH<span>UPLIFT</span>ER</h1></Link>
            </div>

            <nav className='header-container__nav'>
                <ul>
                    <li><Link to='/' >Home</Link></li>
                    <li><Link to='/About'>About Us</Link></li>
                    <li><Link to='/Shop/ALL'>Shop</Link></li>
                    <li><Link to='/Contact'>Contact</Link></li>
                </ul>
            </nav>

            <div className="header-container__cart">    
               <Link to ="/OrderHistory"><img src="https://cdn-icons-png.flaticon.com/512/2089/2089679.png" alt="order-history" /></Link>
               <Link to ='/cart'><img src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png" alt = "header-cart" /> </Link>
                {
                    cartItem > 0 ? <button className ="cartItem-button">{cartItem}</button> : ''
                }
            </div>

            <div  className="menu-btn" onClick={toggleMenu}>
                <span ref ={hamburger} className="menu-btn__burger" ></span>
            </div>


            <nav className="nav" ref={nav}>

                <ul className="menu-nav" ref ={menuNav}>

                    <li className="menu-nav_item active">
                    <Link className="menu-nav__link" to='/' >Home</Link> 
                    </li>

                    <li className="menu-nav_item active">
                        <Link to='/About'>About Us</Link>
                    </li>

                    <li className="menu-nav_item active">
                        <Link to='/Shop/ALL'>Shop</Link>
                    </li>

                    <li className="menu-nav_item active">
                        <Link to='/Contact'>Contact</Link>
                    </li>

                    <li className="menu-nav_item active">
                        <Link to='/Cart'>Cart</Link>
                    </li>

                    <li className="menu-nav_item active">
                        <Link to='/OrderHistory'>Order History</Link>
                    </li>

                </ul>
        </nav>


        </div>
    )
}
export default Header;