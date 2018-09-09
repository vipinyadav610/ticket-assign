import { combineReducers } from 'redux'
import sidebar from './sidebar'
import tickets from './tickets'
const rootReducer = combineReducers({ sidebar, tickets })
export default rootReducer
