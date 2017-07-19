/**
 * Created by chanwoopark on 2017. 7. 19..
 */

import axios from 'axios';

export default function(id,password){
    const loginReq = axios.post('/login',{id, password});

    if(id && password){
        return((dispatch) => {
            loginReq.then((res) => {
                if(typeof res.data === "string"){
                    dispatch({type:res.data});
                }else{
                    console.log("login success msg from action");
                    localStorage.setItem('token',res.data.token);
                    dispatch({type:"USER_AUTHED"});
                }
            })
        })
    }else{
        return{type:"BLANK_INPUT"};
    }
};

