import { legacy_createStore , combineReducers} from "redux";
import handleNum from "./NumStatus/reducer";
import handleArr from "./ArrStatus/reducer";
const reducers = combineReducers({
  handleNum,
  handleArr
})
export default legacy_createStore(reducers)
