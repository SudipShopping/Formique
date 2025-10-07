import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../store/slices/authSlice';

export default function Login() {
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const dispatch = useDispatch();

  const handleSendOTP = () => {
    // Implement sending OTP logic here
    setStep(2);
  };

  const handleVerifyOTP = () => {
    // Implement OTP verification logic here
    // On success:
    dispatch(setCredentials({ user: { phone }, token: 'fake-jwt-token', role: 'user' }));
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      {step === 1 && (
        <div>
          <input
            type="text"
            placeholder="Phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border p-2 w-full mb-4"
          />
          <button onClick={handleSendOTP} className="bg-blue-500 text-white px-4 py-2 rounded">
            Send OTP
          </button>
        </div>
      )}
      {step === 2 && (
        <div>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="border p-2 w-full mb-4"
          />
          <button onClick={handleVerifyOTP} className="bg-green-500 text-white px-4 py-2 rounded">
            Verify OTP & Login
          </button>
        </div>
      )}
    </div>
  );
}

