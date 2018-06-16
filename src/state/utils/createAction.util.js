export default (type, payloadCallback) => (...args) => ({
  type,
  payload: typeof payloadCallback === 'function' ? payloadCallback(...args) : null
})
