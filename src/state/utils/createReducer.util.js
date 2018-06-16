export default (initState, handlers) => {
  if (typeof handlers !== 'object') {
    throw new Error('Handlers must be an object')
  }

  return (state = initState, action) => {
    const handler = handlers[action.type]
    if (handler) {
      return handler(state, action.payload)
    }
    return state
  }
}
