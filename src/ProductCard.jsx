import { useState } from "react";   
import "./ProductCard.css";

function ProductCard({ title, description, price, imageUrl }) {
    const [quantity, setQuantity] = useState(1);

    
  return (
    <div className="product-card">
      <img className="product-image" src={imageUrl} alt={title} />
      <h2 className="product-title">{title}</h2>
      <p className="product-description">{description}</p>
      <p className="product-price">Price: ${price}</p>

      <div>
        <button
          onClick={() => {
            setQuantity(quantity > 1 ? quantity - 1 : 1);
          }}
        >
          -
        </button>
        {quantity }
        <button
          onClick={() => {
            setQuantity(quantity + 1);
          }}
        >
          +
        </button>
      </div>
      <p>
        Total Price: ${ (quantity * price).toFixed(2) }
      </p>
    </div>
  );
}

export default ProductCard;
