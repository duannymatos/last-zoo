import { createStore } from "redux";
import rootReducer from "./reducers/root-reducer";

function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
};


export default configureStore();