import { useState } from 'react';

export default function Investment() {
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');

  const invest = () => {
    const amt = parseInt(amount);
    if (amt >= 50 && amt <= 500) {
      localStorage.setItem('investment', amt);
      setMessage('Investment successful. Invite users to grow it.');
    } else {
      setMessage('Amount must be between 50 and 500 KES.');
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Investment Plan</h1>
      <input className="border p-2 w-full mb-2" type="number" placeholder="Enter amount (50-500)" value={amount} onChange={e => setAmount(e.target.value)} />
      <button className="bg-blue-600 text-white px-4 py-2 w-full" onClick={invest}>Invest</button>
      <p className="mt-4 text-green-600">{message}</p>
    </div>
  );
}
