/**
 * Created by chanwoopark on 2017. 7. 20..
 */
const inputIDs=["loginId","loginPassword","signupId","signupPassword","signupConfirm","signupEmail"];

const initialDatas = {};
inputIDs.map(function(currType){
    initialDatas[currType] = null
});

import {INPUT_MODIFIED} from '../actions/actionTypes'


export default function(state = initialDatas,action){
    switch(action.type){
        case INPUT_MODIFIED:
            const newState = {...state};
            newState[action.tagId] = action.value;
            return newState;
    }
    return state;
}