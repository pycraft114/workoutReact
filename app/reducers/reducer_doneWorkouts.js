/**
 * Created by chanwoopark on 2017. 8. 2..
 */
import { DONEWORKOUTS_FETCHED } from 'actions/actionTypes';

export default function(state = [], action){
    switch(action.type){
        case DONEWORKOUTS_FETCHED:
            console.log('reducer_doneWorkouts', action.doneWorkouts );
            return action.doneWorkouts;
    }
    return state;
}