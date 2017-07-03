/**
 * Created by chanwoopark on 2017. 6. 30..
 */
import axios from 'axios';

export default function(evt,kg,rep,date,workout,prevVolumes){
    console.log("prevVolumes",prevVolumes);
    if(evt.key ==="Enter" || evt.target.id === "check"){
        if(kg&&rep){
            const newArr = [...prevVolumes,{kg:kg,rep:rep}];

            axios.post(`/${date}/${workout}`,newArr);

            return{type:"KGREP_SENT",initialList:[]}
        }
    }

    return {type:"DUMMY",payload:"DUMMY"};
}