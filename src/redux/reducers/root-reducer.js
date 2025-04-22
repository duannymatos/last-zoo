import loginReducer from "./login-reducers";
import animalsReducer from "./animals-reducers";
import searchReducer from "./search-reducers";
import formReducer from "./form-reducers";
import { combineReducers } from "redux";




const rootReducer = combineReducers({ loginReducer, animalsReducer, searchReducer, formReducer })
// This would produce the following state object

export default rootReducer