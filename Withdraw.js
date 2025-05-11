import { useState } from 'react';

export default function Withdraw() {
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');
  const taskBalance = parseInt(localStorage.getItem('taskBalance') || '0');
  const hasWithdrawnBefore = localStorage.getItem('firstWithdraw') === 'done';

  const withdraw = () => {
    const amt = parseInt(amount);
    if (taskBalance < 300) return setMessage('Balance must be at least 300 KES.');
    if (!hasWithdrawnBefore && amt < 50) return setMessage('First withdrawal must be at least 50 KES.');

    localStorage.setItem('taskBalance', taskBalance - amt);
    if (!hasWithdrawnBefore) localStorage.setItem('firstWithdraw', 'done');
    alert('Admin has been notified on WhatsApp for approval.');
    setMessage(`You have withdrawn ${amt} KES.`);
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Withdraw Funds</h1>
      <input className="border p-2 w-full mb-2" type="number" placeholder="Enter amount to withdraw" value={amount} onChange={e => setAmount(e.target.value)} />
      <button className="bg-yellow-600 text-white px-4 py-2 w-full" onClick={withdraw}>Withdraw</button>
      <p className="mt-4 text-blue-600">{message}</p>
    </div>
  );
}
