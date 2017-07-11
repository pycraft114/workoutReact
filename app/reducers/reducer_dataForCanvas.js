/**
 * Created by chanwoopark on 2017. 7. 11..
 */
/*
dataPoints: [
    { x: 10, y: 10 },
    { x: 20, y: 15 },
    { x: 30, y: 25 },
    { x: 40, y: 30 },
    { x: 50, y: 28 }
]*/
export default function(state=[],action){
    switch(action.type){
        case "OPTION_CLICKED":
            console.log(action.dataForCanvas);
            return action.dataForCanvas
    }


    return state
}