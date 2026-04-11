import { useAppContext } from '../context/AppContext';
import BudgetCard from '../components/BudgetCard';
import BudgetForm from '../components/BudgetForm';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseList from '../components/ExpenseList';
import { Wallet, ReceiptText, TrendingUp } from 'lucide-react';

export default function Dashboard() {
  const { userName, budgets, expenses } = useAppContext();

  const totalBudget = budgets.reduce((acc, b) => acc + b.amount, 0);
  const totalSpent = expenses.reduce((acc, e) => acc + e.amount, 0);
  const totalRemaining = totalBudget - totalSpent;

  return (
    <div className="space-y-8 pb-20 md:pb-8">
      <header>
        <h1 className="text-3xl font-bold tracking-tight text-black">
          Hello, <span className="text-teal-600">{userName}</span>
        </h1>
        <p className="text-gray-500">Here's your financial overview for today.</p>
      </header>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <div className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-500">
            <Wallet size={16} className="text-teal-600" />
            Total Budgeted
          </div>
          <div className="text-2xl font-bold text-black">${totalBudget.toLocaleString()}</div>
        </div>
        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <div className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-500">
            <ReceiptText size={16} className="text-teal-600" />
            Total Spent
          </div>
          <div className="text-2xl font-bold text-black">${totalSpent.toLocaleString()}</div>
        </div>
        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <div className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-500">
            <TrendingUp size={16} className="text-teal-600" />
            Total Remaining
          </div>
          <div className={`text-2xl font-bold ${totalRemaining < 0 ? 'text-red-500' : 'text-black'}`}>
            ${totalRemaining.toLocaleString()}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Left Column: Forms */}
        <div className="space-y-8 lg:col-span-1">
          <BudgetForm />
          <ExpenseForm />
        </div>

        {/* Right Column: Summaries */}
        <div className="space-y-8 lg:col-span-2">
          {budgets.length > 0 && (
            <section>
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl font-bold text-black">Active Budgets</h2>
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {budgets.slice(0, 4).map((budget) => (
                  <BudgetCard key={budget.id} budget={budget} showDelete={false} />
                ))}
              </div>
            </section>
          )}

          <section>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-bold text-black">Recent Expenses</h2>
            </div>
            <ExpenseList expenses={expenses.slice(-5).reverse()} />
          </section>
        </div>
      </div>
    </div>
  );
}
