/**
 * Created by chanwoopark on 2017. 7. 20..
 */
import {INPUT_MODIFIED} from './actionTypes';

export default function(evt,tagId,value){
    console.log("action_changeInput being called");
    console.log("tagId",tagId);
    console.log("value",value);
    return {
        type:INPUT_MODIFIED,
        tagId:tagId,
        value:value
    }
}