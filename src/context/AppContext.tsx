import React, { createContext, useContext, useState, useEffect } from 'react';
import { Budget, Expense } from '../types';

interface AppContextType {
  userName: string | null;
  setUserName: (name: string) => void;
  budgets: Budget[];
  expenses: Expense[];
  addBudget: (name: string, amount: number) => void;
  deleteBudget: (id: string) => void;
  addExpense: (name: string, amount: number, budgetId: string) => void;
  deleteExpense: (id: string) => void;
  getBudgetExpenses: (budgetId: string) => Expense[];
  getBudgetSpent: (budgetId: string) => number;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userName, setUserNameState] = useState<string | null>(() => {
    return localStorage.getItem('userName');
  });

  const [budgets, setBudgets] = useState<Budget[]>(() => {
    const saved = localStorage.getItem('budgets');
    return saved ? JSON.parse(saved) : [];
  });

  const [expenses, setExpenses] = useState<Expense[]>(() => {
    const saved = localStorage.getItem('expenses');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    if (userName) {
      localStorage.setItem('userName', userName);
    }
  }, [userName]);

  useEffect(() => {
    localStorage.setItem('budgets', JSON.stringify(budgets));
  }, [budgets]);

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const setUserName = (name: string) => {
    setUserNameState(name);
  };

  const addBudget = (name: string, amount: number) => {
    const newBudget: Budget = {
      id: crypto.randomUUID(),
      name,
      amount,
      createdAt: Date.now(),
    };
    setBudgets((prev) => [...prev, newBudget]);
  };

  const deleteBudget = (id: string) => {
    setBudgets((prev) => prev.filter((b) => b.id !== id));
    setExpenses((prev) => prev.filter((e) => e.budgetId !== id));
  };

  const addExpense = (name: string, amount: number, budgetId: string) => {
    const newExpense: Expense = {
      id: crypto.randomUUID(),
      name,
      amount,
      budgetId,
      createdAt: Date.now(),
    };
    setExpenses((prev) => [...prev, newExpense]);
  };

  const deleteExpense = (id: string) => {
    setExpenses((prev) => prev.filter((e) => e.id !== id));
  };

  const getBudgetExpenses = (budgetId: string) => {
    return expenses.filter((e) => e.budgetId === budgetId);
  };

  const getBudgetSpent = (budgetId: string) => {
    return getBudgetExpenses(budgetId).reduce((acc, curr) => acc + curr.amount, 0);
  };

  return (
    <AppContext.Provider
      value={{
        userName,
        setUserName,
        budgets,
        expenses,
        addBudget,
        deleteBudget,
        addExpense,
        deleteExpense,
        getBudgetExpenses,
        getBudgetSpent,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
