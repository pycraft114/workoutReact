/**
 * Created by chanwoopark on 2017. 8. 1..
 */
import { WORKOUT_CLICKED } from 'actions/actionTypes';

export default function(state = null, action){
    switch(action.type){
        case WORKOUT_CLICKED:
            return action.workout;
    }

    return state;
}