/**
 * Created by chanwoopark on 2017. 6. 21..
 */
import {combineReducers,} from "redux";

import reducer_response from "./reducer_response";
import reducer_kg from "./reducer_kg";
import reducer_rep from "./reducer_rep";
import reducer_kgRepList from "./reducer_kgRepList";
import reducer_selectedDate from "./reducer_selectedDate";
import reducer_selectedWorkouts from "./reducer_selectedWorkouts";
import reducer_workoutOptions from "./reducer_workoutOptions";
import reducer_dataForCanvas from "./reducer_dataForCanvas";
import reducer_dataForDoughnut from "./reducer_dataForDoughnut";
import reducer_authenticate from './reducer_autheticate';


//combineReducer tells the redux how to create application state
const rootReducer = combineReducers({
    selectedWorkouts:reducer_selectedWorkouts,
    selectedDate:reducer_selectedDate,
    responseText:reducer_response,
    kg:reducer_kg,
    rep:reducer_rep,
    kgRepList:reducer_kgRepList,
    workoutOptions:reducer_workoutOptions,
    dataForCanvas:reducer_dataForCanvas,
    dataForDoughnut:reducer_dataForDoughnut,
    isAuthed:reducer_authenticate
});
//==> state{books:blah,
//          activeBook:blah}

export default rootReducer;
