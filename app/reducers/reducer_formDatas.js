/**
 * Created by chanwoopark on 2017. 7. 20..
 */
const inputIDs=["L-id","L-pw","S-id","S-pw","S-cf","S-em"];
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