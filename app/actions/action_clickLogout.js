/**
 * Created by chanwoopark on 2017. 7. 25..
 */
import { USER_DEAUTHED } from './actionTypes';


export default function(){
    localStorage.removeItem('token');

    return(
        {type:USER_DEAUTHED}
    )
}