import { useNavigate } from 'react-router-dom';

export default function Activate({ setIsActivated }) {
  const navigate = useNavigate();

  const confirmPayment = () => {
    setIsActivated(true);
    localStorage.setItem('activated', 'true');
    localStorage.setItem('taskBalance', '50');
    localStorage.setItem('withdrawBalance', '50');
    // Simulate WhatsApp notification (actual integration requires backend)
    alert('Payment confirmed. Admin has been notified via WhatsApp.');
    navigate('/dashboard');
  };

  return (
    <div className="p-8 max-w-md mx-auto text-center">
      <h1 className="text-xl font-bold mb-4">Activate Account</h1>
      <p className="mb-4">Send <b>100 KES</b> to <b>0705483052</b> via PayPal (Name: <b>C-ZONE Earn</b>).</p>
      <p className="mb-4">Once paid, click below to confirm.</p>
      <button className="bg-green-600 text-white px-4 py-2 w-full" onClick={confirmPayment}>I Have Paid</button>
    </div>
  );
}
