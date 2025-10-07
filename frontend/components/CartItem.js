import { useDispatch } from 'react-redux';
import { removeFromCart, adjustQuantity } from '../store/slices/cartSlice';

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeFromCart(item.product.id));
  };

  const handleChangeQty = (e) => {
    dispatch(adjustQuantity({ productId: item.product.id, quantity: parseInt(e.target.value) }));
  };

  return (
    <div className="flex items-center space-x-4 py-2">
      <div className="w-16 h-16">
        <img src={item.product.image || '/placeholder.png'} alt={item.product.name} className="w-full h-full object-cover rounded" />
      </div>
      <div className="flex-1">
        <h3 className="font-semibold">{item.product.name}</h3>
        <p className="text-sm text-gray-600">${(item.product.price / 100).toFixed(2)}</p>
        <div className="mt-1">
          <input
            type="number"
            min="1"
            value={item.quantity}
            onChange={handleChangeQty}
            className="border p-1 w-16"
          /> x ${(item.product.price / 100 * item.quantity).toFixed(2)}
        </div>
      </div>
      <button onClick={handleRemove} className="text-red-500 hover:underline">Remove</button>
    </div>
  );
}

