import React, { useState } from 'react'

export const AddTransaction = () => {
  const [text, setText] = useState('')
  const [amount, setAmount] = useState(0)

  return (
    <>
      <h2 className="sub-title">내역 추가</h2>
      <form>
        <div>
          <label htmlFor="text">내용</label>
          <input
            type="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="내용을 입력해주세요."
          />
        </div>
        <div>
          <label htmlFor="amount">
            금액
            <br />
            (마이너스: 지출, 플러스: 수입)
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="금액을 입력해주세요."
          />
        </div>
        <button className="btn">내역 추가하기</button>
      </form>
    </>
  )
}
