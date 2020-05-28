import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers"

const INITIAL_STORE = {};

const middleware = [thunk];

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION__ || compose;

const store = createStore(
    reducers,
    INITIAL_STORE,
    composeEnhancers(applyMiddleware(...middleware))
);

export default store;