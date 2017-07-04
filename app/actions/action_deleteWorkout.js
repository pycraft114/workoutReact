/**
 * Created by chanwoopark on 2017. 7. 4..
 */
import axios from 'axios';


export default function(date,idx,prevWorkouts){
    var newArr = [...prevWorkouts];
    newArr.splice(idx,1);

    const saveReq = axios.post("/saveworkout",{"date":date,"selected_workout":newArr});

    return (dispatch) => {
        saveReq.then(() => {
            dispatch({
                type:"WORKOUTDELBTN_CLICKED",
                selectedWorkouts:newArr
            })
        })
    }

}