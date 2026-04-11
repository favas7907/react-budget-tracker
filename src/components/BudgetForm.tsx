import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

export default function BudgetForm() {
  const { addBudget } = useAppContext();
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !amount) return;
    addBudget(name, parseFloat(amount));
    setName('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-xl font-bold text-black">Create New Budget</h2>
      <div className="space-y-4">
        <div>
          <label htmlFor="budget-name" className="mb-1 block text-sm font-medium text-gray-700">
            Budget Name
          </label>
          <input
            id="budget-name"
            type="text"
            required
            placeholder="e.g., Groceries"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-lg border border-gray-200 px-4 py-2 outline-none transition-all focus:border-teal-600 focus:ring-2 focus:ring-teal-600/10"
          />
        </div>
        <div>
          <label htmlFor="budget-amount" className="mb-1 block text-sm font-medium text-gray-700">
            Amount
          </label>
          <input
            id="budget-amount"
            type="number"
            required
            step="0.01"
            placeholder="e.g., 500"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full rounded-lg border border-gray-200 px-4 py-2 outline-none transition-all focus:border-teal-600 focus:ring-2 focus:ring-teal-600/10"
          />
        </div>
        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-black py-2.5 font-semibold text-white transition-all hover:bg-teal-600 active:scale-[0.98]"
        >
          <Plus size={18} />
          Add Budget
        </button>
      </div>
    </form>
  );
}
