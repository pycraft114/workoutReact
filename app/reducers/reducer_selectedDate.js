/**
 * Created by chanwoopark on 2017. 6. 30..
 */
/**
 * Created by chanwoopark on 2017. 6. 30..
 */
//date format : YYYY-MM-DD
/*
const year = new Date().getFullYear().toString(),
      month = (new Date().getMonth() + 1).toString(),
      day = new Date().getDay().toString();

const initialDate = year.concat("-", month, "-", day);
*/

export default function(state = null, action){
    switch(action.type){
        case "DATE_SELECTED":
            return action.date;
    }

    return state;
}