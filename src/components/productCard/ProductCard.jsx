import React from "react";
import "./productCard.css";

export default function ProductCard({
  title,
  salePrice,
  regularPrice,
  savings,
  thumb,
}) {
  return (
    <div className="card">
      <img className="thumb-image" src={thumb} alt={title} />
      <div>
        <h3 className="title">{title}</h3>
        <span className="savings">{Math.floor(savings)}%</span>
        <span className="regular-price">{regularPrice}$</span>
        <span className="sale-price">{salePrice}$</span>
      </div>
    </div>
  );
}
