/**
 * Created by chanwoopark on 2017. 6. 21..
 */
import { combineReducers } from "redux";
import dummy from "./dummy";
import typeInput from "./reducer_typeInput"



//combineReducer tells the redux how to create application state
const rootReducer = combineReducers({
    dummy: dummy,
    value:typeInput

});
//==> state{books:blah,
//          activeBook:blah}

export default rootReducer;
