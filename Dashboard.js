import { Link } from 'react-router-dom';

export default function Dashboard() {
  const taskBalance = localStorage.getItem('taskBalance') || 0;
  const investment = localStorage.getItem('investment') || 0;

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Welcome to C-ZONE Earn</h1>
      <p className="mb-2">Task Balance: <b>{taskBalance} KES</b></p>
      <p className="mb-4">Investment Wallet: <b>{investment} KES</b></p>

      <Link className="block bg-blue-500 text-white p-2 mb-2 text-center" to="/investment">Investment Center</Link>
      <Link className="block bg-yellow-500 text-white p-2 mb-2 text-center" to="/withdraw">Withdraw</Link>
    </div>
  );
}
