import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Wallet, ReceiptText } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

export default function Navbar() {
  const location = useLocation();
  const { userName } = useAppContext();

  if (!userName) return null;

  const navItems = [
    { path: '/', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/budgets', label: 'Budgets', icon: Wallet },
    { path: '/expenses', label: 'Expenses', icon: ReceiptText },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white px-4 py-2 md:top-0 md:bottom-auto md:border-t-0 md:border-b">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link to="/" className="hidden items-center gap-2 text-xl font-bold tracking-tight text-black md:flex">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-600 text-white">
            <Wallet size={20} />
          </div>
          TealBudget
        </Link>

        <div className="flex w-full items-center justify-around md:w-auto md:gap-8">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center gap-1 text-xs font-medium transition-colors md:flex-row md:gap-2 md:text-sm ${
                  isActive ? 'text-teal-600' : 'text-gray-500 hover:text-black'
                }`}
              >
                <Icon size={isActive ? 22 : 20} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
