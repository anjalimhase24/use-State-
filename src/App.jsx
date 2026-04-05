import "./App.css";  
import ProductCard from "./ProductCard";

function App() {
  return (
    <div className="products-container">
      <h1>Products</h1>

      <ProductCard
        title="Smartphone"
        description="A high-end smartphone"
        price={699.99}
        imageUrl="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=500&q=60"
      />
      
      <ProductCard
        title="Laptop"
        description="Powerful laptop for work and gaming"
        price={1299.99}
        imageUrl="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=500&q=60"
      />
    </div>
  );
}

export default App;