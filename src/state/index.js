import {createStore, applyMiddleware} from 'redux'
import reducers from 'state/reducers'
import thunk from 'redux-thunk'

const reduxDevTool = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export default createStore(reducers, reduxDevTool, applyMiddleware(thunk))
