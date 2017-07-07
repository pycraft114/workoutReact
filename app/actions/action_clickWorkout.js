/**
 * Created by chanwoopark on 2017. 7. 3..
 */
import axios from 'axios';

export default function(date,workout){
    var date_workout = date+"_"+workout;

    const getKgRep = axios.get(`/kg_rep/${date_workout}`);

    return((dispatch) => {
        getKgRep.then((res) => {
            dispatch({type:"WORKOUT_CLICKED",kgRepList:res.data})
        })
    })


}