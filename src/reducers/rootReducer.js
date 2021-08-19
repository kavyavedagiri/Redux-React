import { combineReducers } from "redux";
import simpleReducer from "./simpleReducer";

export default combineReducers({
    rootReducer:simpleReducer
})

//using combine reducer we combine all the reducers needed
// this rootReducer has the index of reducers 