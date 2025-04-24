import React, { useEffect, useState } from 'react';
import ShowCard from './ShowCard/ShowCard';
import  useGetData from './useGetData'

function RightContent() {
  const products = useGetData(); // dùng hook để lấy data

  return (
    <div id="right-content">
      <h2>Product:</h2>
      <div id="products">
        {products.map((product) => (
          <ShowCard key={product.id} loai={product.loai} name={product.name} avatar={product.avatar}
          />
        ))}
        <div style={{ clear: 'both' }} />
      </div>
      <div style={{ clear: 'both' }} />
    </div>
  );
}

export default RightContent;
