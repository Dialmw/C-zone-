import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [referralCode, setReferralCode] = useState('');
  const navigate = useNavigate();

  const handleSignup = () => {
    localStorage.setItem('userDetails', JSON.stringify({ emailOrPhone, referralCode }));
    navigate('/activate');
  };

  return (
    <div className="p-8 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Join C-ZONE Earn</h1>
      <input className="border p-2 w-full mb-2" placeholder="Email or Phone" value={emailOrPhone} onChange={e => setEmailOrPhone(e.target.value)} />
      <input className="border p-2 w-full mb-4" placeholder="Referral Code (optional)" value={referralCode} onChange={e => setReferralCode(e.target.value)} />
      <button className="bg-blue-600 text-white px-4 py-2 w-full" onClick={handleSignup}>Sign Up</button>
    </div>
  );
}
