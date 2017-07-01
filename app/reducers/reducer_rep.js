/**
 * Created by chanwoopark on 2017. 7. 1..
 */

export default function(state = null,action){
    switch(action.type){
        case "REP_TYPED":
            return action.rep;
    }
    return state;
}