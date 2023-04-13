import { createStor, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducer  from "./reducer.js";

const middleWare=[thunk]
const store =createStor(
    reducer,
    composeWithDevTools(applyMiddleware(...middleWare))
);
export default store;