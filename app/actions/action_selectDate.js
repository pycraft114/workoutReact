/**
 * Created by chanwoopark on 2017. 6. 30..
 */
import axios from 'axios';
import {DATE_SELECTED} from './actionTypes';

export default function(date){
    console.log("date",date);


    var getReq = axios.get(`/selected_workouts/${date}`);

    return(dispatch) => {
        getReq.then((res) => {
            console.log(res.data);
            dispatch({type:DATE_SELECTED, date: date, response:res.data})
        })
    };


}