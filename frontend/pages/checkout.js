import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../store/slices/cartSlice';
import { calculateDiscount } from '../utils/helpers';

export default function Checkout() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const [coupon, setCoupon] = useState('');
  const [discount, setDiscount] = useState(0);

  const handleApplyCoupon = () => {
    setDiscount(calculateDiscount(subtotal, coupon));
  };

  const handlePlaceOrder = () => {
    // Implement order placement logic here
    alert('Order placed!');
    dispatch(clearCart());
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="font-semibold mb-2">Shipping Address</h2>
          <input type="text" placeholder="Address Line 1" className="border p-2 w-full mb-2" />
          <input type="text" placeholder="Address Line 2" className="border p-2 w-full mb-2" />
          <input type="text" placeholder="City" className="border p-2 w-full mb-2" />
          <input type="text" placeholder="Postal Code" className="border p-2 w-full mb-2" />
          <input type="text" placeholder="Country" className="border p-2 w-full mb-2" />
        </div>
        <div>
          <h2 className="font-semibold mb-2">Order Summary</h2>
          <p>Subtotal: ${(subtotal/100).toFixed(2)}</p>
          <div className="mt-2">
            <input
              type="text"
              placeholder="Coupon code"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              className="border p-2 w-full mb-2"
            />
            <button onClick={handleApplyCoupon} className="bg-blue-500 text-white px-4 py-2 rounded">
              Apply
            </button>
          </div>
          <p>Discount: ${(discount/100).toFixed(2)}</p>
          <p className="font-semibold">Total: ${((subtotal - discount)/100).toFixed(2)}</p>
          <button onClick={handlePlaceOrder} className="bg-green-500 text-white px-4 py-2 rounded mt-4">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}
