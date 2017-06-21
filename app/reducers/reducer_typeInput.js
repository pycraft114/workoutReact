/**
 * Created by chanwoopark on 2017. 6. 21..
 */
/**
 * Created by chanwoopark on 2017. 6. 21..
 */
export default function(state = [], action) {
    switch (action.type) {
        case "INPUT_TYPED":
            return [action.payload,...state];
    }

    return state;
}