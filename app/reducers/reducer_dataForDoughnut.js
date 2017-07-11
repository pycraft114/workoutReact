/**
 * Created by chanwoopark on 2017. 7. 11..
 */
export default function(state={daysWorkedOut:0,dayDifference:0},action){
    switch(action.type){
        case "DOUGHNUT_LOADED":
            return action.dataForDoughnut;
    }


    return state;
}