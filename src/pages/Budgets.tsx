import { useAppContext } from '../context/AppContext';
import BudgetCard from '../components/BudgetCard';
import BudgetForm from '../components/BudgetForm';

export default function Budgets() {
  const { budgets } = useAppContext();

  return (
    <div className="space-y-8 pb-20 md:pb-8">
      <header>
        <h1 className="text-3xl font-bold tracking-tight text-black">All Budgets</h1>
        <p className="text-gray-500">Manage your budget categories and spending limits.</p>
      </header>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <BudgetForm />
        </div>
        <div className="lg:col-span-2">
          {budgets.length === 0 ? (
            <div className="flex h-64 flex-col items-center justify-center rounded-2xl border border-dashed border-gray-200 bg-gray-50 text-center">
              <p className="mb-2 text-lg font-medium text-gray-900">No budgets found</p>
              <p className="text-sm text-gray-500">Create your first budget to start tracking your expenses.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {budgets.map((budget) => (
                <BudgetCard key={budget.id} budget={budget} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
