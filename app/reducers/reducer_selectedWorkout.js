/**
 * Created by chanwoopark on 2017. 6. 30..
 */
export default function(state=[],action){
    switch(action.type){
        case "WORKOUT_SELECTED":
            return action.payload;
        case "DATE_SELECTED":
            console.log("called",action.response);
            return action.response;
    }

    return state;
}