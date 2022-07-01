import AboutSection from '../components/about-components/AboutSection';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Fragment } from 'react';


const About = () => {
    return(
        <Fragment>
            <Header/>
            <AboutSection/>
            <Footer/>
        </Fragment>
    )
}

export default About;