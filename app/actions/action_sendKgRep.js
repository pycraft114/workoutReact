/**
 * Created by chanwoopark on 2017. 6. 30..
 */
import axios from 'axios';

export default function(evt,kg,rep,date,workout){
    if(evt.key ==="Enter" || evt.target.id === "check"){
        if(kg&&rep){
            let postReq = axios.post(`/${date}/${workout}`,{kg:kg,rep:rep})
            return{}//???????????????????????????????
        }else{

        }
    }
}