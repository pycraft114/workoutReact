/**
 * Created by chanwoopark on 2017. 7. 11..
 */
import axios from 'axios';
import {DOUGHNUT_LOADED} from './actionTypes';

function calculateDayDiff(firstDay,secondDay){
    let oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
    return Math.round(Math.abs((firstDay.getTime() - secondDay.getTime())/(oneDay)));
}

export default function(){
    let getReq = axios.get('/days');
    return(
        (dispatch) => {
            getReq.then((res) => {
                console.log("response came");
                let startDate = res.data.startDate,
                    year = startDate.split("-")[0],
                    month = startDate.split("-")[1],
                    day = startDate.split("-")[2],
                    daysWorkedOut = res.data.daysWorkedOut,
                    dayDifference = calculateDayDiff(new Date(year,month-1,day),new Date());




                dispatch({type:DOUGHNUT_LOADED,dataForDoughnut:{daysWorkedOut,dayDifference}});
            })
        }
    )
}