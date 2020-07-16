import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

// Initial State
const initialState = {
  transactions: [
    { id: 1, text: '주유', amount: -30000 },
    { id: 2, text: '월급', amount: 2000000 },
    { id: 3, text: '서적 구매', amount: -28000 },
    { id: 4, text: '여행 경비', amount: -300000 }
  ]
}

// Create context
export const GlobalContext = createContext(initialState)

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    })
  }

  return (
    <GlobalContext.Provider value={{ transactions: state.transactions, deleteTransaction }}>
      {children}
    </GlobalContext.Provider>
  )
}
