import React from 'react';
import { Link } from 'react-router-dom';
import data from './data';

function ProductDetail(props) {
  const item = data.find((product) => product.name === props.match.params.name);

  function formatNumber(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }

  return (
    <div className="product-detail">
      <Link to="/">Back</Link>
      <img src={item.img} alt="" />
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <strong>${formatNumber(item.price)}</strong>
      <button
        onClick={() => {
          props.addItem(item);
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductDetail;
