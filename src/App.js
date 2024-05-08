import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

const products = [
  {
    id: 1,
    name: 'Laptop 1',
    price: 2236,
    rating: 4.7,
    discount: 63,
    availability: 'yes',
  },
  {
    id: 2,
    name: 'Laptop 13',
    price: 1244,
    rating: 4.5,
    discount: 45,
    availability: 'out-of-stock',
  },
  {
    id: 3,
    name: 'Laptop 3',
    price: 9102,
    rating: 4.44,
    discount: 98,
    availability: 'out-of-stock',
  },
  {
    id: 4,
    name: 'Laptop 13',
    price: 1244,
    rating: 4.5,
    discount: 45,
    availability: 'out-of-stock',
  },
  {
    id: 5,
    name: 'Laptop 3',
    price: 9102,
    rating: 4.44,
    discount: 98,
    availability: 'out-of-stock',
  },
  {
    id: 6,
    name: 'Laptop 11',
    price: 2652,
    rating: 4.12,
    discount: 70,
    availability: 'yes',
  },
  {
    id: 7,
    name: 'Laptop 4',
    price: 1258,
    rating: 3.8,
    discount: 33,
    availability: 'yes',
  },
];

function ProductList() {
  return (
    <div className="product-list">
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProductDetails({ match }) {
  const product = products.find((p) => p.id === parseInt(match.params.id));
  if (!product) return <div>Product not found</div>;
  return (
    <div className="product-details">
      <h1>{product.name}</h1>
      <p>Price: ${product.price}</p>
      <p>Rating: {product.rating}</p>
      <p>Discount: {product.discount}%</p>
      <p>Availability: {product.availability}</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}

export default App;