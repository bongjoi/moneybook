export default (state, action) => {
  switch (action.type) {
    case 'DELETE_TRANSACTION':
      const deletedTransaction = state.transactions.filter(
        (transaction) => transaction.id !== action.payload
      )
      localStorage.setItem('transactions', JSON.stringify(deletedTransaction))
      return {
        ...state,
        transactions: deletedTransaction
      }
    case 'ADD_TRANSACTION':
      const addedTransaction = [action.payload, ...state.transactions]
      localStorage.setItem('transactions', JSON.stringify(addedTransaction))
      return {
        ...state,
        transactions: addedTransaction
      }
    default:
      return state
  }
}
