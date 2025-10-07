import { useSelector } from 'react-redux';
import OrderStatusTracker from '../components/OrderStatusTracker';

export default function Orders() {
  const user = useSelector((state) => state.auth.user);

  if (!user) {
    return <div>Please login to view your orders.</div>;
  }

  // Example data: In real app, fetch user's orders from API
  const orders = [
    { id: 1, status: 'Processing', items: [{ name: 'Product A', qty: 2 }] },
    { id: 2, status: 'Shipped', items: [{ name: 'Product B', qty: 1 }] },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Your Orders</h1>
      {orders.map(order => (
        <div key={order.id} className="border p-4 rounded mb-4">
          <h2 className="font-semibold">Order #{order.id}</h2>
          <OrderStatusTracker status={order.status} />
          <ul className="mt-2">
            {order.items.map((item, idx) => (
              <li key={idx}>{item.qty} x {item.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

