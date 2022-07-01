import './NewsLetter.scss';

const NewsLetter = () =>{

    return (
        <div className="NewsLetter-container">

            <div className="NewsLetter-container__content">
                <h2><span>SUBSCRIBE</span> NOW!</h2>
                <p>GET 30% OFF COUP ON TODAY SUBSCRIBERS</p>

            </div>

            <div className="NewsLetter-container__email">
            
            <form action="">
                <input type ='text' placeholder="EMAIL" />
                <button type='submit'>SUBSCRIBE FOR DISCOUNTS</button>
             </form>

            </div>

        </div>


    )


}

export default NewsLetter;