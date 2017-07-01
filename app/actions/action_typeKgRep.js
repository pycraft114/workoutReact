/**
 * Created by chanwoopark on 2017. 6. 30..
 */
export default function(evt){
    if(evt.target.id === 'kg'){
        return{
            type:"KG_TYPED",
            kg:evt.target.value
        }
    }else{
        return{
            type:"REP_TYPED",
            rep:evt.target.value
        }
    }
}
