import { useEffect, useState } from "react";
import "./ProductCard.css";

function ProductCard({ title, description, price, imageUrl }) {
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(price);

  useEffect(() => {
    setTotalPrice(quantity * price);
  }, [quantity, price]);

  const handleDecrease = () => {
    if (quantity <= 1) {
      window.alert("Quantity cannot be less than 1. Minimum quantity is 1.");
      setQuantity(1);
      return;
    }

    setQuantity((prev) => prev - 1);
  };

  const handleIncrease = () => {
    if (quantity >= 9) {
      window.alert("Quantity cannot be greater than 9. Maximum quantity is 9.");
      setQuantity(9);
      return;
    }

    setQuantity((prev) => prev + 1);
  };

  return (
    <div className="product-card">
      <img className="product-image" src={imageUrl} alt={title} />
      <h2 className="product-title">{title}</h2>
      <p className="product-description">{description}</p>
      <p className="product-price">Price: ${price}</p>

      <div className="quantity-controls">
        <button onClick={handleDecrease}>-</button>
        <span className="quantity-value">{quantity}</span>
        <button onClick={handleIncrease}>+</button>
      </div>

      <p className="quantity-label">Quantity: {quantity}</p>
      <p className="total-price">Total Price: ${totalPrice.toFixed(2)}</p>
    </div>
  );
}

export default ProductCard;
