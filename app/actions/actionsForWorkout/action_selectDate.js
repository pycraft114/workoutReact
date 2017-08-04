/**
 * Created by chanwoopark on 2017. 6. 30..
 */
import {DATE_SELECTED} from '../actionTypes';

export default function(date){
    console.log("date",date);
    return {type : DATE_SELECTED, date}
}