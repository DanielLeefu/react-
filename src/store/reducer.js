import { combineReducers } from "redux"
import MyLeftReducer from "../components/MyLeft/reducer"
import notifyReducer from "../components/Menu/Notify/reducer"

const reducer = combineReducers({
  MyLeftReducer,
  notifyReducer
})

export default reducer