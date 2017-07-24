/**
 * Created by chanwoopark on 2017. 7. 19..
 */

import axios from 'axios';
import {WRONG_PASSWORD,USER_NOT_FOUND,USER_AUTHED,BLANK_INPUT} from '../actionTypes';

export default function(id,password){

    if(id && password){
        const loginReq = axios.post('/login',{id, password});

        return((dispatch) => {
            loginReq.then((res) => {
                if(res.data === WRONG_PASSWORD){
                    dispatch({type:WRONG_PASSWORD});
                }else if(res.data === USER_NOT_FOUND){
                    dispatch({type:USER_NOT_FOUND});
                }else{
                    localStorage.setItem('token',res.data.token);
                    dispatch({type:USER_AUTHED});
                }
            })
        })
    }else{
        return{type:BLANK_INPUT};
    }
};

