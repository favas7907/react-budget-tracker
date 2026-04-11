import React from 'react';
import { Trash2, AlertCircle } from 'lucide-react';
import { Budget } from '../types';
import { useAppContext } from '../context/AppContext';

interface BudgetCardProps {
  budget: Budget;
  showDelete?: boolean;
}

const BudgetCard: React.FC<BudgetCardProps> = ({ budget, showDelete = true }) => {
  const { getBudgetSpent, deleteBudget } = useAppContext();
  const spent = getBudgetSpent(budget.id);
  const remaining = budget.amount - spent;
  const percentage = Math.min((spent / budget.amount) * 100, 100);
  const isOverspent = spent > budget.amount;

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-md">
      <div className="mb-4 flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{budget.name}</h3>
          <p className="text-sm text-gray-500">${budget.amount.toLocaleString()} Budgeted</p>
        </div>
        {showDelete && (
          <button
            onClick={() => deleteBudget(budget.id)}
            className="rounded-full p-2 text-gray-400 transition-colors hover:bg-red-50 hover:text-red-500"
            aria-label="Delete budget"
          >
            <Trash2 size={18} />
          </button>
        )}
      </div>

      <div className="mb-2 flex items-end justify-between">
        <div className="text-2xl font-bold text-black">${spent.toLocaleString()}</div>
        <div className={`text-sm font-medium ${isOverspent ? 'text-red-500' : 'text-gray-500'}`}>
          {isOverspent ? (
            <span className="flex items-center gap-1">
              <AlertCircle size={14} />
              Over by ${(spent - budget.amount).toLocaleString()}
            </span>
          ) : (
            `$${remaining.toLocaleString()} remaining`
          )}
        </div>
      </div>

      <div className="h-2.5 w-full overflow-hidden rounded-full bg-gray-100">
        <div
          className={`h-full transition-all duration-500 ease-out ${
            isOverspent ? 'bg-red-500' : 'bg-teal-600'
          }`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default BudgetCard;
