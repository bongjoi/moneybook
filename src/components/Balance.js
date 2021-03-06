import React, { useContext } from 'react'

import { GlobalContext } from '../context/GlobalState'
import { currencyFormatter } from '../utils/currencyFormatter'

export const Balance = () => {
  const { transactions } = useContext(GlobalContext)
  const amounts = transactions.map(({ amount }) => amount)
  const total = amounts.reduce((acc, cur) => (acc += cur), 0)

  return (
    <>
      <h2 className="sub-title">총 잔액</h2>
      <p className="balance">{currencyFormatter(total)} 원</p>
    </>
  )
}
