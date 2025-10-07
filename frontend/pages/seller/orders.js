import OrderStatusTracker from '../../components/OrderStatusTracker';

export default function SellerOrders() {
  // Example orders data for seller
  const orders = [
    { id: 1, status: 'Pending', items: [{ name: 'Product A', qty: 1 }] },
    { id: 2, status: 'Delivered', items: [{ name: 'Product B', qty: 3 }] },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Seller Orders</h1>
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
