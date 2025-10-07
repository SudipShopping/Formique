export default function RatingStars({ rating }) {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={i < rating ? 'text-yellow-500' : 'text-gray-300'}>
          ★
        </span>
      ))}
    </div>
  );
}
