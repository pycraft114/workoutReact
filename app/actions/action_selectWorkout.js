/**
 * Created by chanwoopark on 2017. 6. 30..
 */
import axios from 'axios';


export default function(evt,date,prevWorkout){
    const selectedWorkout = evt.target.value;


    let newArr = [...prevWorkout,selectedWorkout];
    const uniqeArr = [...new Set(newArr)];

    const saveReq = axios.post("/updateworkout",{"date":date,"selected_workout":uniqeArr});

    return (dispatch) => {
        saveReq.then((res) => {
            dispatch({type:"WORKOUT_SELECTED", selectedWorkouts:uniqeArr})
        })
    }
}