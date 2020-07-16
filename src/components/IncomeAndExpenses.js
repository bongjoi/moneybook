import React from 'react'

export const IncomeAndExpenses = () => {
  return (
    <div className="inc-exp-container">
      <div>
        <h3>수입</h3>
        <p className="money money--plus">+0 원</p>
      </div>
      <div>
        <h3>지출</h3>
        <p className="money money--minus">-0 원</p>
      </div>
    </div>
  )
}
