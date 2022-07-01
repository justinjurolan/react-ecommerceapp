import Header from '../components/Header';
import ShopFilter from '../components/shop-components/ShopFilter';
import ShopSidebar from '../components/shop-components/ShopSidebar';
import Footer from '../components/Footer';
import '../components/shop-components/Shop.scss';
import { useParams } from 'react-router';

const Shop = ({ itemData, dispatch }) => {
  const { category } = useParams();

  return (
    <>
      <Header />
      <section className="Shop-container">
        <div className="Shop-container__sidebar">
          <ShopSidebar />
        </div>

        <div className="Shop-container__content">
          {category === 'ALL'
            ? itemData.map((item) => {
                return (
                  <ShopFilter item={item} dispatch={dispatch} key={item.name} />
                );
              })
            : itemData
                .filter((item) => item.category === category)
                .map((item) => {
                  return <ShopFilter item={item} dispatch={dispatch} />;
                })}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Shop;
