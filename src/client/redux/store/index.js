import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from 'reducers'
import promiseMiddleware from 'middlewares/promise'

let Middlewares = [thunk, promiseMiddleware]

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...Middlewares),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)
export default store
