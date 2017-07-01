/**
 * Created by chanwoopark on 2017. 6. 30..
 */
export default function(state=[],action){
    switch(action.type){
        case "WORKOUT_SELECTED":
            return action.selectedWorkout;
        case "DATE_SELECTED":
            return action.response;
    }

    return state;
}