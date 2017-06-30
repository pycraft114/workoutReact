/**
 * Created by chanwoopark on 2017. 6. 21..
 */
import {combineReducers,} from "redux";
import thunk from 'redux-thunk';

import reducer_response from "./reducer_response";
import reducer_kg from "./reducer_kg";
import reducer_rep from "./reducer_rep";
import reducer_selectedDate from "./reducer_selectedDate";
import reducer_selectedWorkout from "./reducer_selectedWorkout";



//combineReducer tells the redux how to create application state
const rootReducer = combineReducers({
    selectedWorkout:reducer_selectedWorkout,
    selectedDate:reducer_selectedDate,
    responseText:reducer_response,
    kg:reducer_kg,
    rep:reducer_rep,
});
//==> state{books:blah,
//          activeBook:blah}

export default rootReducer;
