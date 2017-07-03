/**
 * Created by chanwoopark on 2017. 7. 3..
 */
import axios from 'axios';

export default function(date,workout){
    var date_workout = date+"_"+workout;

    const getKgRep = axios.post("/getkgrep",{date_workout:date_workout});

    return((dispatch) => {
        getKgRep.then((res) => {
            console.log("action_click",res.data);
            dispatch({type:"WORKOUT_CLICKED",kgRepList:res.data})
        })
    })


}