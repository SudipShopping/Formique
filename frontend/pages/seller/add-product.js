import { useState } from 'react';
import { useRouter } from 'next/router';

export default function AddProduct() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [desc, setDesc] = useState('');
  const [image, setImage] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send product data to API
    alert('Product added!');
    router.push('/seller');
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Add Product</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} className="border p-2 w-full mb-2" />
        <textarea placeholder="Description" value={desc} onChange={(e)=>setDesc(e.target.value)} className="border p-2 w-full mb-2"></textarea>
        <input type="number" placeholder="Price (cents)" value={price} onChange={(e)=>setPrice(e.target.value)} className="border p-2 w-full mb-2" />
        <input type="text" placeholder="Image URL" value={image} onChange={(e)=>setImage(e.target.value)} className="border p-2 w-full mb-2" />
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Submit</button>
      </form>
    </div>
  );
}

