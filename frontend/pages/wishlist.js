import { useSelector, useDispatch } from 'react-redux';
import { removeFromWishlist } from '../store/slices/wishlistSlice';
import ProductCard from '../components/ProductCard';
import Link from 'next/link';

export default function Wishlist() {
  const items = useSelector((state) => state.wishlist.items);
  const dispatch = useDispatch();

  if (items.length === 0) {
    return <div>Your wishlist is empty. <Link href="/"><a className="text-blue-500">Browse products</a></Link>.</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Wishlist</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map(item => (
          <div key={item.id} className="relative">
            <ProductCard product={item} />
            <button
              onClick={() => dispatch(removeFromWishlist(item.id))}
              className="absolute top-2 right-2 text-red-500"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

