import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../store/slices/cartSlice';
import CartItem from '../components/CartItem';
import Link from 'next/link';

export default function Cart() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  if (items.length === 0) {
    return <div>Your cart is empty. <Link href="/"><a className="text-blue-500">Continue shopping</a></Link>.</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {items.map(item => (
        <CartItem key={item.product.id} item={item} />
      ))}
      <div className="mt-4 text-right">
        <p className="text-xl font-semibold">Total: ${(total/100).toFixed(2)}</p>
        <button onClick={() => dispatch(clearCart())} className="bg-red-500 text-white px-4 py-2 rounded mr-2">Clear Cart</button>
        <Link href="/checkout"><a className="bg-green-500 text-white px-4 py-2 rounded">Checkout</a></Link>
      </div>
    </div>
  );
}

