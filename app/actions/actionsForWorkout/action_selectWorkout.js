/**
 * Created by chanwoopark on 2017. 6. 30..
 */
import axios from 'axios';
import {WORKOUT_SELECTED} from '../actionTypes';

export default function(selectedWorkout,date,prevWorkouts){
    const token = localStorage.getItem('token');

    let newArr = [...prevWorkouts,selectedWorkout];
    const selected_workouts = [...new Set(newArr)];

    const saveReq = axios.put(`/selected_workouts/${date}`,{selected_workouts},{headers:{token}});

    return (dispatch) => {
        saveReq.then((res) => {
            dispatch({type:WORKOUT_SELECTED, selectedWorkouts:selected_workouts})
        })
    }
}