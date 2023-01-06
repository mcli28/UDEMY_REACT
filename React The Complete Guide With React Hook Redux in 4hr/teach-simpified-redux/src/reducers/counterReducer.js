
const counterReducer  = (state = 0, action) => {
  switch (action.type) {
    case first:
      return { ...state, ...payload }
    default:
      return state
  }
}

export default counterReducer