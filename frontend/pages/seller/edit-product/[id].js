import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from '../../../utils/api';

export default function EditProduct() {
  const router = useRouter();
  const { id } = router.query;
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [desc, setDesc] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    if (id) {
      // Fetch existing product data
      axios.get(`/products/${id}`)
        .then(res => {
          setName(res.data.name);
          setPrice(res.data.price);
          setDesc(res.data.description);
          setImage(res.data.image);
        })
        .catch(err => console.error(err));
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send updated product data to API
    alert('Product updated!');
    router.push('/seller');
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Edit Product</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} className="border p-2 w-full mb-2" />
        <textarea placeholder="Description" value={desc} onChange={(e)=>setDesc(e.target.value)} className="border p-2 w-full mb-2"></textarea>
        <input type="number" placeholder="Price (cents)" value={price} onChange={(e)=>setPrice(e.target.value)} className="border p-2 w-full mb-2" />
        <input type="text" placeholder="Image URL" value={image} onChange={(e)=>setImage(e.target.value)} className="border p-2 w-full mb-2" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Update</button>
      </form>
    </div>
  );
}

