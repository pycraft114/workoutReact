/**
 * Created by chanwoopark on 2017. 7. 4..
 */
import axios from 'axios';

export default function(date,workout,idx,prevVolumes){
    var date_workout = date+"_"+workout;

    var newArr = [...prevVolumes];
    newArr.splice(idx,1);

    axios.put(`/volume/${date_workout}`,newArr);

    return{
        type:"VOL_DELETE_CLICKED",
        kgRepList:newArr
    }

}