import './Footer.scss'

const Footer = () => {
    
    return (
      <footer>
        <div className="footer-container">
          <div className="footer-container__content">
            <h4>GET STARTED</h4>
            <ul>
              <li>RESOURCES</li>
              <li>TUTORIALS</li>
              <li>EXAMPLES</li>
              <li>DOCS</li>
            </ul>
          </div>
          <div className="footer-container__content">
            <h4 className='footer-container__content-about'>ABOUT</h4>
            <ul>
              <li>STORIES</li>
              <li>COMMUNITY</li>
              <li>BLOG</li>
              <li>BRAND</li>
            </ul>
          </div>
          <div className="footer-container__content">
            <h4>FEATURES</h4>
            <ul>
              <li>OVERVIEW</li>
              <li>DESIGN</li>
              <li>CODE</li>
              <li>COLLABORATE</li>
            </ul>
          </div>
          <div className="footer-container__content">
            <h4>FOLLOW US</h4>
            <ul>
              <li>FACEBOOK</li>
              <li>TWITTER</li>
              <li>YOUTUBE</li>
              <li>INSTAGRAM</li>
            </ul>
          </div>
          <div className="footer-container__subscribe">
    
              <input type="text" placeholder="EMAIL" />
              <button type="submit">SUBSCRIBE</button>
            
          </div>
        </div>
        <div className="footer-container__copyright">
          COPYRIGHT 2020
        </div>
      </footer>
    );
  };
  
  export default Footer;