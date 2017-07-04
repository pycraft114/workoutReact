/**
 * Created by chanwoopark on 2017. 6. 30..
 */
export default function(state=[],action){
    switch(action.type){
        case "DATE_SELECTED":
            return action.response;
        case "WORKOUT_SELECTED":
            return action.selectedWorkouts;
        case "WORKOUTDELBTN_CLICKED":
            return action.selectedWorkouts;
    }

    return state;
}