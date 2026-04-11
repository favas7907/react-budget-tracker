import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

export default function ExpenseForm() {
  const { budgets, addExpense } = useAppContext();
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [budgetId, setBudgetId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !amount || !budgetId) return;
    addExpense(name, parseFloat(amount), budgetId);
    setName('');
    setAmount('');
    setBudgetId('');
  };

  if (budgets.length === 0) return null;

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-xl font-bold text-black">Add New Expense</h2>
      <div className="space-y-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label htmlFor="expense-name" className="mb-1 block text-sm font-medium text-gray-700">
              Expense Name
            </label>
            <input
              id="expense-name"
              type="text"
              required
              placeholder="e.g., Coffee"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-lg border border-gray-200 px-4 py-2 outline-none transition-all focus:border-teal-600 focus:ring-2 focus:ring-teal-600/10"
            />
          </div>
          <div>
            <label htmlFor="expense-amount" className="mb-1 block text-sm font-medium text-gray-700">
              Amount
            </label>
            <input
              id="expense-amount"
              type="number"
              required
              step="0.01"
              placeholder="e.g., 5.50"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full rounded-lg border border-gray-200 px-4 py-2 outline-none transition-all focus:border-teal-600 focus:ring-2 focus:ring-teal-600/10"
            />
          </div>
        </div>
        <div>
          <label htmlFor="expense-budget" className="mb-1 block text-sm font-medium text-gray-700">
            Budget Category
          </label>
          <select
            id="expense-budget"
            required
            value={budgetId}
            onChange={(e) => setBudgetId(e.target.value)}
            className="w-full rounded-lg border border-gray-200 px-4 py-2 outline-none transition-all focus:border-teal-600 focus:ring-2 focus:ring-teal-600/10"
          >
            <option value="" disabled>Select a budget</option>
            {budgets.map((budget) => (
              <option key={budget.id} value={budget.id}>
                {budget.name}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-black py-2.5 font-semibold text-white transition-all hover:bg-teal-600 active:scale-[0.98]"
        >
          <Plus size={18} />
          Add Expense
        </button>
      </div>
    </form>
  );
}
