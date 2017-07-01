/**
 * Created by chanwoopark on 2017. 6. 30..
 */
export default function(state = null,action){
    switch(action.type){
        case "KG_TYPED":
            return action.kg;
    }
    return state;
}