import React from 'react'

export const AddTransaction = () => {
  return (
    <>
      <h2 className="sub-title">내역 추가</h2>
      <form>
        <div>
          <label htmlFor="text">내용</label>
          <input type="text" id="text" placeholder="내용을 입력해주세요." />
        </div>
        <div>
          <label htmlFor="amount">
            금액
            <br />
            (마이너스: 지출, 플러스: 수입)
          </label>
          <input type="number" id="amount" placeholder="금액을 입력해주세요." />
        </div>
        <button className="btn">내역 추가하기</button>
      </form>
    </>
  )
}
