/**
 * Created by chanwoopark on 2017. 7. 10..
 */
import axios from 'axios';

export default function(workoutOptions){
    var getQuery = axios.get(`/volume/workout?workoutOptions=${workoutOptions}`);
    return(
        (dispatch) => {
            getQuery.then((res) => {
                console.log(res);
                dispatch({type:"OPTIONBTN_CLICKED", graphOptions:res})
            })
        }
    )
}