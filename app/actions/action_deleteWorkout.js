/**
 * Created by chanwoopark on 2017. 7. 4..
 */
import axios from 'axios';


export default function(date,idx,prevWorkouts,currWorkout){

    var date_workout = date+"_"+currWorkout;
    var newArr = [...prevWorkouts];
    newArr.splice(idx,1);

    const saveReq = axios.post("/updateworkout",{"date":date,"selected_workout":newArr});
    const delReq = axios.post("/deletekgrep",{"date_workout":date_workout});

    return (dispatch) => {
        saveReq.then(() => {
            dispatch({
                type:"WORKOUTDELBTN_CLICKED",
                selectedWorkouts:newArr
            })
        })
    }

}