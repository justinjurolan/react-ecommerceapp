import './About.scss';
import {Link} from 'react-router-dom'
// import image1 from '../assets/ad7.jpg';

const AboutSection = () => {
    return(
        <section className='AboutSection-container'>
            <div className="AboutSection-container__title">
                <h1>About</h1>
            </div>

            <div className="AboutSection-container__about">

                <div className="aboutcontainer-img">
                    <img src ="https://elementorecommercetutorial.com/wp-content/uploads/2020/08/ad7.jpg" alt="About" />
                </div>
                
                <div className="aboutcontainer-content">
                    <h2>ABOUT OUR COMPANY</h2>
                    <p> Shuplifter was established in 2022 by a group of different aspiring web developers in the Philippines. This is a product of both marketing and business solutions aiming to provide an e-commerce platform that consumers can use as an alternative locally. The company offers as well different digital solutions for software development aiming to fill the gaps between local vendors and direct users to meet the current demand.</p>
                    <Link to= "/Shop/ALL"><button> SHOP NOW </button></Link>
                </div>

            </div>

            <div className="AboutSection-container__crew">

                <h4>THE CREW</h4>
                <span><h2>OUR TEAM</h2></span>
                <p>The idea was born with the help of different collaborators to provide an online platform delivering, the best quality clothing products and brands measuring with the modern fashion trend.</p>
                
                <div className="AboutSection-container__crew-overlay">

                    <div className="AboutSection-container__crew-overlay__justin">

                        <div>

                            <h3>Justin</h3>

                        </div>

                    </div>

                    <div className="AboutSection-container__crew-overlay__laine">

                        <div>

                            <h3>Laine</h3>
                            
                        </div>

                    </div>

                    <div className="AboutSection-container__crew-overlay__jarren">

                        <div>

                            <h3>Jarren</h3>
                            
                        </div>

                    </div>
                    <div className="AboutSection-container__crew-overlay__kate">

                        <div>

                            <h3>Kate</h3>
                                
                        </div>

                    </div>
                    <div className="AboutSection-container__crew-overlay__james">

                        <div>

                            <h3>James</h3>
                                
                        </div>

                    </div>
                    <div className="AboutSection-container__crew-overlay__cath">

                        <div>

                            <h3>Cath</h3> 

                        </div>

                    </div>
                    <div className="AboutSection-container__crew-overlay__mark">

                        <div>
                        
                            <h3>Mark</h3> 
                                
                        </div>

                    </div>
                </div>
            </div>


            
        </section>
    )
};

export default AboutSection;