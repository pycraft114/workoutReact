/**
 * Created by chanwoopark on 2017. 6. 30..
 */
import axios from 'axios';
import {KGREP_SENT} from '../actionTypes';

export default function(evt,kg,rep,date,workout,prevVolumes){
    console.log("kg rep sending");
    console.log(date,workout);
    const token = localStorage.getItem('token');

    if(evt.key ==="Enter" || evt.target.id === "check"){
        if(kg&&rep){
            const date_workout = date+"_"+workout;

            const newVolumes = [...prevVolumes,{kg:kg,rep:rep}];

            axios.put(`/kg_rep/${date_workout}`,newVolumes,{headers:{token}});

            return{type:KGREP_SENT,kgRepList:newVolumes}
        }
    }

    return {type:"DUMMY"};
}