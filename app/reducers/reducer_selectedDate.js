/**
 * Created by chanwoopark on 2017. 6. 30..
 */
/**
 * Created by chanwoopark on 2017. 6. 30..
 */
export default function(state=null,action){
    switch(action.type){
        case "DATE_SELECTED":
            return action.date;
    }

    return state;
}