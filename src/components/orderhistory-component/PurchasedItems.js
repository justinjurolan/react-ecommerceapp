import './PurchasedItems.scss';

const PurchasedItems = ({ items }) => {
  return (
    <div className="PurchasedItems-container">
      <div className="PurchasedItems-container__title">
        <h2>Order History </h2>
      </div>
      <div className="PurchasedItems-container__separator"></div>

      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Product</th>
            <th>Price</th>
            <th className="purchase-quantity">Quantity</th>
            <th>SubTotal</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {
            return (
              <tr key={item.id}>
                <td>
                  <img
                    className="table-image"
                    src={item.image}
                    alt={item.name}
                  />
                </td>
                <td>{item.name}</td>
                <td>{item.origPrice}</td>
                <td>{item.quantity}</td>
                <td>{item.origPrice * item.quantity}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default PurchasedItems;
