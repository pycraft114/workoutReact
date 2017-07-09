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
import reducer_datesForChart from './reducer_datesForChart';
import reducer_volumesForChart from './reducer_volumesForChart';



//combineReducer tells the redux how to create application state
const rootReducer = combineReducers({
    selectedWorkouts:reducer_selectedWorkouts,
    selectedDate:reducer_selectedDate,
    responseText:reducer_response,
    kg:reducer_kg,
    rep:reducer_rep,
    kgRepList:reducer_kgRepList,
    workoutOptions:reducer_workoutOptions,
    datesForChart:reducer_datesForChart,
    volumesForChart:reducer_volumesForChart
});
//==> state{books:blah,
//          activeBook:blah}

export default rootReducer;
