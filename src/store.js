import { createStore,applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import rootReducer from "./reducers/rootReducer";

const store= createStore(rootReducer,applyMiddleware(thunk));

export default store
//thunk is a middleware!
//createStore (1arg points to rootreducer, 2nd to initial value,3rd to middleware)