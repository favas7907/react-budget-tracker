import { Trash2 } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { Expense } from '../types';

interface ExpenseListProps {
  expenses: Expense[];
  showBudget?: boolean;
}

export default function ExpenseList({ expenses, showBudget = true }: ExpenseListProps) {
  const { budgets, deleteExpense } = useAppContext();

  if (expenses.length === 0) {
    return (
      <div className="flex h-32 items-center justify-center rounded-2xl border border-dashed border-gray-200 bg-gray-50 text-gray-400">
        No expenses yet
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="border-b border-gray-50 bg-gray-50/50 text-xs font-semibold uppercase tracking-wider text-gray-500">
            <tr>
              <th className="px-6 py-4">Name</th>
              <th className="px-6 py-4">Amount</th>
              {showBudget && <th className="px-6 py-4">Budget</th>}
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {expenses.map((expense) => {
              const budget = budgets.find((b) => b.id === expense.budgetId);
              return (
                <tr key={expense.id} className="group transition-colors hover:bg-gray-50/50">
                  <td className="px-6 py-4 font-medium text-gray-900">{expense.name}</td>
                  <td className="px-6 py-4 text-gray-900">${expense.amount.toLocaleString()}</td>
                  {showBudget && (
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center rounded-full bg-teal-50 px-2.5 py-0.5 text-xs font-medium text-teal-700">
                        {budget?.name || 'Unknown'}
                      </span>
                    </td>
                  )}
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {new Date(expense.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button
                      onClick={() => deleteExpense(expense.id)}
                      className="rounded-full p-2 text-gray-400 opacity-0 transition-all hover:bg-red-50 hover:text-red-500 group-hover:opacity-100"
                      aria-label="Delete expense"
                    >
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
