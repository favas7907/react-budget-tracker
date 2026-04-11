import { useAppContext } from '../context/AppContext';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseList from '../components/ExpenseList';

export default function Expenses() {
  const { expenses } = useAppContext();

  return (
    <div className="space-y-8 pb-20 md:pb-8">
      <header>
        <h1 className="text-3xl font-bold tracking-tight text-black">All Expenses</h1>
        <p className="text-gray-500">A complete history of your spending across all categories.</p>
      </header>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <ExpenseForm />
        </div>
        <div className="lg:col-span-2">
          <section>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-bold text-black">Expense History</h2>
              <span className="text-sm font-medium text-gray-500">{expenses.length} total</span>
            </div>
            <ExpenseList expenses={[...expenses].reverse()} />
          </section>
        </div>
      </div>
    </div>
  );
}
