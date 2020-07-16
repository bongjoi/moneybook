import React, { useContext } from 'react'

import { Transaction } from './Transaction'
import { GlobalContext } from '../context/GlobalState'

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext)

  return (
    <>
      <h2 className="sub-title">내역</h2>
      <ul className="transaction__list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} {...transaction} />
        ))}
      </ul>
    </>
  )
}
