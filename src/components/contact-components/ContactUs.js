import './ContactUs.scss';

const ContactUs = () => {
    return (
        <>
            <section className='section'>
                <h1>Contact</h1>
            </section>
            <div className="container-form">
                <div className="content">
                    <div className="content__information">
                        <h3>GENERAL INQUIRIES</h3>
                        <p>1408 BLOCKS VALLEY, SYDNEY, NSW 2060, AUSTRALIA</p>
                        <p>(+61) 555-1408 INFO@BLOCKSVALLEY.COM</p>
                        <p>IF YOU ARE A REPORTER LOOKING FOR INFORMATION ON MEDIA SERVICES PLEASE CONTACT US AT: </p>
                        <p>PRESS@BLOCKSVALLEY.COM</p>
                        <div className="icons">
                            <ul>
                                <li><a><i className="fa-brands fa-facebook-f"></i></a></li>
                                <li><a><i className="fa-brands fa-twitter"></i></a></li>
                                <li><a><i className="fa-brands fa-google"></i></a></li>
                                <li><a><i className="fa-brands fa-pinterest"></i></a></li>
                                <li><a><i className="fa-solid fa-envelope"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="content__contact">
                        <form action="">
                            <input className="content__contact__input" type="text" required placeholder='FIRST NAME'/>
                            <input className="content__contact__input" type="text" required placeholder='LAST NAME'/>
                            <input className="content__contact__input" type="email" required placeholder='E-MAIL ADDRESS'/>
                            <input className="content__contact__input" type="number" required placeholder='PHONE'/>
                            <textarea className="content__contact__text" placeholder="Message"></textarea>
                            <button className="button-submit"type="submit">Submit Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    
    )
}
export default ContactUs;
