/**
 * Created by chanwoopark on 2017. 6. 21..
 */
import {combineReducers,} from "redux";

import reducer_message from "./reducer_message";
import reducer_kg from "./reducer_kg";
import reducer_rep from "./reducer_rep";
import reducer_kgRepList from "./reducer_kgRepList";
import reducer_selectedDate from "./reducer_selectedDate";
import reducer_dataForCanvas from "./reducer_dataForCanvas";
import reducer_dataForDoughnut from "./reducer_dataForDoughnut";
import reducer_isAuthed from './reducer_isAuthed';
import reducer_formDatas from './reducer_formDatas';
import reducer_clickedWorkout from './reducer_clickedWorkout';
import reducer_doneWorkouts from './reducer_doneWorkouts';


//combineReducer tells the redux how to create application state
const rootReducer = combineReducers({

    selectedDate:reducer_selectedDate,

    message:reducer_message,

    kg:reducer_kg,

    rep:reducer_rep,

    kgRepList:reducer_kgRepList,


    dataForCanvas:reducer_dataForCanvas,

    dataForDoughnut:reducer_dataForDoughnut,

    isAuthed:reducer_isAuthed,

    formDatas:reducer_formDatas,

    clickedWorkout : reducer_clickedWorkout,

    doneWorkouts : reducer_doneWorkouts
});
//==> state{books:blah,
//          activeBook:blah}

export default rootReducer;
