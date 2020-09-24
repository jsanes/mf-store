import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import data from './data';

function ProductsList(props) {
  function renderItems() {
    return data.map((item, index) => (
      <div className="item" key={`store-item-${index}`}>
        <Link to={`/product/${item.name}`}>
          <img src={item.img} alt="" />
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <strong>
            {item.price ? '$' : ''}
            {item.price}
          </strong>
        </Link>
        <button
          onClick={() => {
            props.addItem(item);
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
}

export default ProductsList;
