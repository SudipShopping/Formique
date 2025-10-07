import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from '../../utils/api';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/slices/cartSlice';

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      axios.get(`/products/${id}`)
        .then(res => setProduct(res.data))
        .catch(err => console.error(err));
    }
  }, [id]);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto flex space-x-8">
      <img src={product.image || '/placeholder.png'} alt={product.name} className="w-1/2 h-96 object-cover rounded" />
      <div className="flex-1">
        <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
        <p className="text-xl text-blue-600 font-semibold mb-4">${(product.price / 100).toFixed(2)}</p>
        <p className="mb-4">{product.description}</p>
        <button onClick={handleAddToCart} className="bg-green-500 text-white px-4 py-2 rounded">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
