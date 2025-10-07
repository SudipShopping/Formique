import { useState } from 'react';

export default function GiftCards() {
  const [code, setCode] = useState('');
  const [discount, setDiscount] = useState('');

  const handleGenerate = (e) => {
    e.preventDefault();
    // Generate gift card logic
    alert(`Gift card ${code} for ${discount}% generated!`);
    setCode('');
    setDiscount('');
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Generate Gift Card / Coupon</h1>
      <form onSubmit={handleGenerate} className="max-w-md">
        <input type="text" placeholder="Code" value={code} onChange={(e)=>setCode(e.target.value)} className="border p-2 w-full mb-2" />
        <input type="number" placeholder="Discount %" value={discount} onChange={(e)=>setDiscount(e.target.value)} className="border p-2 w-full mb-2" />
        <button type="submit" className="bg-purple-500 text-white px-4 py-2 rounded">Generate</button>
      </form>
    </div>
  );
}

