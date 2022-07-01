import './NewArrivals.scss';

const NewArrivals = ({ itemData, dispatch }) => {
  return (
    <>
      <div className="NewArrival-title">
        <h2>SALE FOR TODAY</h2>
      </div>

      <main>
        {itemData.map((item) => {
          return (
            <div className="container" key={item.id}>
              <span className="sale-tag"></span>

              <div className="container__image">
                <img src={item.image} alt={item.name} />
              </div>

              <p className="container__catergory">{item.category}</p>
              <h3 className="title">{item.name}</h3>
              <img
                className="container__rating"
                src="https://cdn.discordapp.com/attachments/974131127277203527/975763943073120268/star.png"
                alt=""
              />
              <span className="container__price">${item.origPrice}.00</span>

              {
                  <button
                    type="button"
                    onClick={() => dispatch({ type: 'ADD_CART', payload: item.id })}
                    className="container__button"
                  >
                    ADD TO CART
                  </button>

             }
            </div>
          );
        })}
      </main>
    </>
  );
};

export default NewArrivals;
