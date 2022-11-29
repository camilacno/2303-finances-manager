import { createContext, ReactNode, useEffect, useState } from 'react'

interface Transaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  category: string
  price: number
  createdAt: string
}

interface TransactionsContextType {
  transactions: Transaction[]
}

interface TransactionsProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionsContextType)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  async function fetchData() {
    const response = await fetch('http://localhost:3000/transactions')
    const fetchedTransactions = await response.json()
    setTransactions(fetchedTransactions)
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  )
}
