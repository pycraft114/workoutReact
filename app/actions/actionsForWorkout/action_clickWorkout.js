/**
 * Created by chanwoopark on 2017. 7. 3..
 */
import axios from 'axios';
import { WORKOUT_CLICKED } from '../actionTypes';


export default function(date, workout) {
    const token = localStorage.getItem('token');

    const date_workout = date + "_" + workout;

    const getKgRep = axios.get(`/kg_rep/${date_workout}`, { headers: { token } });

    return ((dispatch) => {
        getKgRep.then((res) => {
            dispatch({ type: WORKOUT_CLICKED, kgRepList: res.data});
        });
    })


};