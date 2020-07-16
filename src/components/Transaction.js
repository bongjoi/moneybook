import React from 'react'
import { currencyFormatter } from '../utils/currencyFormatter'

export const Transaction = ({ text, amount }) => {
  const sign = amount < 0 ? '-' : '+'
  const currency = currencyFormatter(Math.abs(amount))

  return (
    <li
      className={
        'transaction__item ' + (amount < 0 ? 'transaction__item--minus' : 'transaction__item--plus')
      }>
      {text}
      <span>
        {sign}
        {currency} 원
      </span>
      <button className="btn--delete">x</button>
    </li>
  )
}
