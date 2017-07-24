/**
 * Created by chanwoopark on 2017. 7. 21..
 */
import axios from 'axios';
import {USER_EXIST,SIGNUP_SUCCESS,CONFIRM_FAIL,BLANK_INPUT} from "../actionTypes";

export default function(id, password, confirm, email){
    if(id && password && confirm && email){
        if(password === confirm){
            const signupReq = axios.post('/signup',{id,password,email});
            return(
                (dispatch) => {
                    signupReq.then((res) => {
                        if(res.data === USER_EXIST){
                            dispatch({type:USER_EXIST});
                        }else if(res.data === SIGNUP_SUCCESS){
                            dispatch({type:SIGNUP_SUCCESS});
                        }
                    })
                }
            )
        }else{
            return {type:CONFIRM_FAIL};
        }
    }else{
        return {type:BLANK_INPUT};
    }

}