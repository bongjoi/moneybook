import React, { useContext } from 'react'

import { GlobalContext } from '../context/GlobalState'
import { currencyFormatter } from '../utils/currencyFormatter'

export const IncomeAndExpenses = () => {
  const { transactions } = useContext(GlobalContext)
  const amounts = transactions.map(({ amount }) => amount)
  const income = amounts.filter((item) => item > 0).reduce((acc, cur) => (acc += cur), 0)
  const expense = amounts.filter((item) => item < 0).reduce((acc, cur) => (acc += cur), 0) * -1

  return (
    <div className="inc-exp-container">
      <div>
        <h3>수입</h3>
        <p className="money money--plus">{currencyFormatter(income)} 원</p>
      </div>
      <div>
        <h3>지출</h3>
        <p className="money money--minus">{currencyFormatter(expense)} 원</p>
      </div>
    </div>
  )
}
