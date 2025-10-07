import Link from 'next/link';

export default function SellerDashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Seller Dashboard</h1>
      <ul className="list-disc pl-5">
        <li><Link href="/seller/add-product"><a className="text-blue-500">Add New Product</a></Link></li>
        <li><Link href="/seller/orders"><a className="text-blue-500">View Orders</a></Link></li>
      </ul>
    </div>
  );
}

