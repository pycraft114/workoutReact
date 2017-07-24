/**
 * Created by chanwoopark on 2017. 7. 20..
 */
import {INPUT_MODIFIED} from '../actionTypes';

export default function(tagId,value){
    return {
        type:INPUT_MODIFIED,
        tagId:tagId,
        value:value
    }
}