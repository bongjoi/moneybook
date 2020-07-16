import React from 'react'

import { Header } from './components/Header'
import { Balance } from './components/Balance'
import { IncomeAndExpenses } from './components/IncomeAndExpenses'
import { TransactionList } from './components/TransactionList'
import { AddTransaction } from './components/AddTransaction'
import './App.css'

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <IncomeAndExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </div>
  )
}

export default App
