/**
 * Created by chanwoopark on 2017. 8. 2..
 */
export default function(state = [], action){
    switch(action.type){
        case "DATE_SELECTED":
            console.log('reducer_doneWorkouts', action.response);
            return action.response;
    }
    return state;
}