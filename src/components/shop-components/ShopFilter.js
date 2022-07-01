import './ShopFilter.scss';

const ShopFilter = ({ item, dispatch }) => {
  return (
    <section className="ShopFilter">
      {
        <div className="ShopFilter-container" key={item.id}>
          <span className="ShopFilter-container__sale-tag"></span>

          <div className="ShopFilter-container__image">
            <img
              src={item.image}
              alt={item.name}
            />
          </div>
          <p className="ShopFilter-container__category">{item.category}</p>
          <h3 className="ShopFilter-container__title">{item.name}</h3>
          <img
            className="ShopFilter-container__rating"
            src="https://cdn.discordapp.com/attachments/974131127277203527/975763943073120268/star.png"
            alt=""
          />
          <p className="ShopFilter-container__price">
            ${item.origPrice.toFixed(2)}
          </p>
          <button
            type="button"
            onClick={(e) => {
              dispatch({ type: 'ADD_CART', payload: item.id });
            }}
            className="ShopFilter-container__button"
          >
            ADD TO CART
          </button>
        </div>
      }
    </section>
  );
};

export default ShopFilter;
