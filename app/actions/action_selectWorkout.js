/**
 * Created by chanwoopark on 2017. 6. 30..
 */
import axios from 'axios';


export default function(selectedWorkout,date,prevWorkout){

    let newArr = [...prevWorkout,selectedWorkout];
    const selected_workouts = [...new Set(newArr)];

    const saveReq = axios.put(`/selected_workouts/${date}`,{selected_workouts});

    return (dispatch) => {
        saveReq.then((res) => {
            dispatch({type:"WORKOUT_SELECTED", selectedWorkouts:selected_workouts})
        })
    }
}