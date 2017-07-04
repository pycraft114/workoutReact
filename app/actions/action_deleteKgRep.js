/**
 * Created by chanwoopark on 2017. 7. 4..
 */
import axios from 'axios';

export default function(date,workout,idx,prevVolumes){
    var newArr = [...prevVolumes];
    newArr.splice(idx,1);

    axios.post(`/${date}/${workout}/update`,newArr);

    return{
        type:"VOL_DELETE_CLICKED",
        kgRepList:newArr
    }

}