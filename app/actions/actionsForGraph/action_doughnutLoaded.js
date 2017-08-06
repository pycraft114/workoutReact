/**
 * Created by chanwoopark on 2017. 7. 11..
 */
import axios from 'axios';
import {DOUGHNUT_LOADED} from '../actionTypes';

function calculateDayDiff(firstDay,secondDay){
    let oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
    return Math.round(Math.abs((firstDay.getTime() - secondDay.getTime())/(oneDay)));
}

export default function(){
    const token = localStorage.getItem('token');
    /*
    1. https://medium.com/@_ericelliott/because-promises-are-eager-not-lazy-calling-axios-get-289c6e325f59 이 자체로 request가 fire 되기 때문에 아래와 중복됨. 위 글처럼 바꾸던가 아래 getReq.then을 바로 axios.get().then으로 바꾸는게 좋을듯
    2. /days 보다는 workout-days 가 더 명확해보임
     */
    const getReq = axios.get('/days',{headers:{token}});

    return(
        (dispatch) => {
            // https://github.com/mzabriskie/axios#handling-errors NO_DATA도 성공적인 response라서 에러는 아님. catch 에러 핸들링 추가 필요함. 성공적이였으면 loadDoughnutSuccessAction, 에러면 loadDoughnutFailAction 등 같이
            getReq.then((res) => {
                if(res.data !== "NO_DATA") {
                    let startDate = res.data.startDate,
                        daysWorkedOut = res.data.daysWorkedOut,
                        year = startDate.split("-")[0],
                        month = startDate.split("-")[1],
                        day = startDate.split("-")[2],
                        dayDifference = calculateDayDiff(new Date(year, month - 1, day), new Date());

                    dispatch({type: DOUGHNUT_LOADED, dataForDoughnut: {daysWorkedOut, dayDifference}});
                }else{
                    dispatch({type:"DUMMY"});
                }
            })
        }
    )
}
