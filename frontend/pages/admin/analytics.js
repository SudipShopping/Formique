export default function Analytics() {
  // Example analytics data
  const users = 120;
  const orders = 45;
  const revenue = 12345.67;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Analytics</h1>
      <p>Total Users: {users}</p>
      <p>Total Orders: {orders}</p>
      <p>Total Revenue: ${revenue}</p>
    </div>
  );
}

