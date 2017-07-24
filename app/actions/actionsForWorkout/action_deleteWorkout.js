/**
 * Created by chanwoopark on 2017. 7. 4..
 */
import axios from 'axios';
import {WORKOUTDELBTN_CLICKED} from '../actionTypes';

export default function(date,idx,prevWorkouts,currWorkout){

    var date_workout = date+"_"+currWorkout;

    var newArr = [...prevWorkouts];
    newArr.splice(idx,1);

    const saveReq = axios.put(`/selected_workouts/${date}`,{"selected_workouts":newArr});
    const delReq = axios.delete(`/${date_workout}`);

    return (dispatch) => {
        saveReq.then(() => {
            dispatch({
                type:WORKOUTDELBTN_CLICKED,
                selectedWorkouts:newArr
            })
        })
    }

}