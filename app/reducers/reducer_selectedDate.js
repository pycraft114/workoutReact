/**
 * Created by chanwoopark on 2017. 6. 30..
 */
/**
 * Created by chanwoopark on 2017. 6. 30..
 */

const initialDate = moment().format("YYYY-MM-DD");

export default function(state = initialDate, action){
    switch(action.type){
        case "DATE_SELECTED":
            return action.date;
    }

    return state;
}