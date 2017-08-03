/**
 * Created by chanwoopark on 2017. 6. 30..
 */
import axios from 'axios';
import {DATE_SELECTED} from '../actionTypes';

export default function(date){
    console.log("date",date);

    const token = localStorage.getItem('token');

    const getReq = axios.get(`/workouts/${date}`,{headers:{token}});

    return(dispatch) => {
        getReq.then((res) => {
            if(res.data !== "NOT_FOUND"){
                const doneWorkouts = [];
                res.data.forEach(function(element){
                    const workout = element["user_date_workout"].split("_")[2];
                    doneWorkouts.push(workout);
                });

                dispatch({ type:DATE_SELECTED, date: date, response:doneWorkouts });
            }else{
                dispatch({ type:DATE_SELECTED, date: date, response:[] })
            }

        })
    };


}