/**
 * Created by chanwoopark on 2017. 6. 30..
 */
export default function(evt,kg,rep,date){
    if(evt.key ==="Enter" || evt.target.id === "check"){
        if(kg&&rep){
            return{
                type:"SEND_KGREP",
                payload:[kg,rep]
            }
        }else{

        }
    }
}