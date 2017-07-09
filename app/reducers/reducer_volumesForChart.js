/**
 * Created by chanwoopark on 2017. 7. 6..
 */
/**
 * Created by chanwoopark on 2017. 6. 30..
 */
export default function(state = [],action){
    switch(action.type){
        case "OPTION_CLICKED":
            return action.volumes;
    }
    return state;
}