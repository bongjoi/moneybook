import React from 'react'

export const TransactionList = () => {
  return (
    <>
      <h2 className="sub-title">내역</h2>
      <ul className="transaction__list">
        <li className="transaction__item transaction__item--plus">
          입금
          <span>+5000 원</span>
          <button className="btn--delete">x</button>
        </li>
        <li className="transaction__item transaction__item--minus">
          통신비
          <span>-5000 원</span>
          <button className="btn--delete">x</button>
        </li>
      </ul>
    </>
  )
}
