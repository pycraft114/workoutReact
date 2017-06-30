/**
 * Created by chanwoopark on 2017. 6. 30..
 */
/**
 * Created by chanwoopark on 2017. 6. 30..
 */
import moment from 'moment';
export default function(state=moment(),action){
    switch(action.type){
        case "DATE_SELECTED":
            return action.date;
    }

    return state;
}