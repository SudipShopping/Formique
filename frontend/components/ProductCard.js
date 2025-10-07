import Link from 'next/link';
import RatingStars from './RatingStars';

export default function ProductCard({ product }) {
  return (
    <div className="border p-4 rounded hover:shadow-lg">
      <Link href={`/products/${product.id}`}>
        <a>
          <img src={product.image || '/placeholder.png'} alt={product.name} className="w-full h-48 object-cover mb-2 rounded" />
          <h2 className="text-lg font-semibold">{product.name}</h2>
          <p className="text-blue-600 font-bold">{'$' + (product.price / 100).toFixed(2)}</p>
          <RatingStars rating={product.rating} />
        </a>
      </Link>
    </div>
  );
}

