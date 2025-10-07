import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import axios from '../utils/api';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from API
    axios.get('/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
