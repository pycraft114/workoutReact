/**
 * Created by chanwoopark on 2017. 8. 4..
 */
import axios from 'axios';
import { DONEWORKOUTS_FETCHED } from 'actions/actionTypes';

export default function(date){
    const token = localStorage.getItem('token');
    const getReq = axios.get(`/workouts/${date}`, {headers : { token }});

    return (dispatch) => {
        getReq.then((res) => {
            if(res.data !== "NOT_FOUND"){
                const doneWorkouts = [];
                res.data.forEach(function(element){
                    const workout = element.user_date_workout.split("_")[2];
                    doneWorkouts.push(workout);
                });

                dispatch({ type:DONEWORKOUTS_FETCHED, doneWorkouts })
            }else{
                dispatch({ type:DONEWORKOUTS_FETCHED, doneWorkouts:[] })
            }
        })
    }
}