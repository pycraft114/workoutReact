/**
 * Created by chanwoopark on 2017. 6. 30..
 */
import axios from 'axios';
import {DATE_SELECTED} from '../actionTypes';

export default function(date){
    console.log("date",date);

    const token = localStorage.getItem('token');

    const getReq = axios.get(`/selected_workouts/${date}`,{headers:{token}});

    return(dispatch) => {
        getReq.then((res) => {
            dispatch({type:DATE_SELECTED, date: date, response:res.data})
        })
    };


}