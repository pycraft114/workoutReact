/**
 * Created by chanwoopark on 2017. 6. 30..
 */

export default function(state=null,action){
    switch(action.type){
        case WRONG_PASSWORD :
            return "Wrong password";
        case USER_NOT_FOUND :
            return "User not found";
        case BLANK_INPUT :
            return "Please fill out the blank";
        case USER_EXIST :
            return "User id already in use";
        case SIGNUP_SUCCESS :
            return "Welcome to CONSISTENCY";
        case CONFIRM_FAIL :
            return "Please confirm your password";
    }
    return state;
}