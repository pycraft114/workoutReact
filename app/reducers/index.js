/**
 * Created by chanwoopark on 2017. 6. 21..
 */
import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";


//combineReducer tells the redux how to create application state
const rootReducer = combineReducers({
    form:formReducer
});
//==> state{books:blah,
//          activeBook:blah}

export default rootReducer;
