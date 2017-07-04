/**
 * Created by chanwoopark on 2017. 7. 4..
 */
export default function(idx,prevWorkouts){
    var newArr = [...prevWorkouts];
    newArr.splice(idx,1);

    return{
        type:"WORKOUTDELBTN_CLICKED",
        selectedWorkouts:newArr
    }
}