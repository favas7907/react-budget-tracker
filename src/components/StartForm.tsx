import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { Wallet } from 'lucide-react';

export default function StartForm() {
  const [name, setName] = useState('');
  const { setUserName } = useAppContext();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      setUserName(name.trim());
      navigate('/');
    }
  };

  return (
    <div className="flex min-h-[80vh] items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8 rounded-3xl border border-gray-100 bg-white p-8 shadow-xl md:p-12">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-600 text-white shadow-lg shadow-teal-600/20">
            <Wallet size={32} />
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-black">TealBudget</h1>
          <p className="mt-2 text-gray-500">Master your money, one budget at a time.</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-semibold text-gray-700">
              What should we call you?
            </label>
            <input
              id="name"
              type="text"
              required
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="block w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-lg transition-all focus:border-teal-600 focus:bg-white focus:ring-4 focus:ring-teal-600/10 outline-none"
            />
          </div>

          <button
            type="submit"
            className="group relative flex w-full items-center justify-center overflow-hidden rounded-xl bg-black py-4 text-lg font-bold text-white transition-all hover:bg-teal-600 active:scale-[0.98]"
          >
            Get Started
          </button>
        </form>
      </div>
    </div>
  );
}
