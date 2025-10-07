export default function ApproveProducts() {
  // Example pending products
  const pending = [
    { id: 1, name: 'New Product 1' },
    { id: 2, name: 'New Product 2' },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Approve Products</h1>
      <ul className="list-disc pl-5">
        {pending.map(item => (
          <li key={item.id}>
            {item.name} <button className="text-green-500 ml-2">Approve</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

