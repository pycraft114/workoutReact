/**
 * Created by chanwoopark on 2017. 7. 18..
 */
export default function(state = null, action) {
    switch(action.type) {
        case "USER_AUTHED":
            return true;
        case "USER_UNAUTH":
            return false;
    }

    return state;
}