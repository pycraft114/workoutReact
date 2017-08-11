/**
 * Created by chanwoopark on 2017. 7. 20..
 */
import {INPUT_MODIFIED} from '../actions/actionTypes'

const inputIDs=["loginId","loginPassword","signupId","signupPassword","signupConfirm","signupEmail"];

const initialData = {};
inputIDs.map(function(currType){
    initialData[currType] = null
});

export default function(state = initialData,action){
    switch(action.type){
        case INPUT_MODIFIED:
            const newState = {...state};
            newState[action.tagId] = action.value;
            return newState;
    }
    return state;
}


