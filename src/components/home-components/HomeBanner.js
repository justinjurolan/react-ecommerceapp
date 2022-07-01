import './HomeBanner.scss'
import {Link} from 'react-router-dom'

const HomeBanner = () => {
    return (
        <div className='banner'>
            <div className='banner-discount'>
                <p><span className='banner-discount__red'>BLACKPINK</span> IN YOUR AREA!</p>
            </div>

            <div className='banner-container'>

                <div className='banner-container__partition'>
                    <div className='banner-container__partition__experience'>
                        <p>NEW ECOMMERCE EXPERIENCE </p>
                    </div>
                    <div className='banner-container__partition__sale'>
                        <p>SUMMER SALE</p>
                    </div>
                    <div className='banner-container__partition__percent'>
                        <h2>50% <span>OFF</span></h2>
                    </div>
                  
                    <div className='banner-container__partition__bottom'>
                        <div className='banner-container__partition__bottom__starting'>
                            <p>STARTING AT $199</p>
                        </div>
                        <div className='banner-container__partition__bottom__button'>
                            <Link to="/Shop/ALL"><button className='banner-container__partition__bottom__button-text'>SHOP NOW!</button></Link>
                        </div>
                    </div>
                </div>

                <div className='banner-container__empty'></div>
            </div>
        </div>
    )
}
export default HomeBanner;
