import React, { useImperativeHandle } from 'react';
import { Link } from 'react-router-dom';
import data from './data';

const ProductsList = React.forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    onItemRemoved: (item) => {
      console.log(`The ${item} has been removed.`);
    },
  }));

  function formatNumber(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }

  function renderItems() {
    return data.map((item, index) => (
      <div className="item" key={`store-item-${index}`}>
        <Link to={`/product/${item.name}`}>
          <img src={item.img} alt="" />
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <strong>
            {item.price ? '$' : ''}
            {formatNumber(item.price)}
          </strong>
        </Link>
        <button
          onClick={() => {
            props.shoppingCartRef.current.addItem(item);
          }}
        >
          Add to Cart
        </button>
      </div>
    ));
  }

  return (
    <div className="store">
      <h1>The new Apple Store</h1>
      <div className="list">{renderItems()}</div>
    </div>
  );
});

export default ProductsList;
