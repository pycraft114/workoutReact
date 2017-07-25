/**
 * Created by chanwoopark on 2017. 7. 4..
 */
import axios from 'axios';
import {WORKOUTDELBTN_CLICKED} from '../actionTypes';

export default function(date,idx,prevWorkouts,currWorkout){
    const newArr = [...prevWorkouts];
    newArr.splice(idx,1);

    const token = localStorage.getItem('token');

    const saveReq = axios.put(`/selected_workouts/${date}`,{"selected_workouts":newArr},{headers:{token}});

    const date_workout = date+"_"+currWorkout;
    axios.delete(`/${date_workout}`,{headers:{token}});

    return (dispatch) => {
        saveReq.then(() => {
            dispatch({
                type:WORKOUTDELBTN_CLICKED,
                selectedWorkouts:newArr
            })
        })
    }

}