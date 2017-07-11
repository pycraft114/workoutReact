/**
 * Created by chanwoopark on 2017. 7. 6..
 */
import axios from 'axios';

export default function(selectedOption){
    var getQuery = axios.get(`/volumes/${selectedOption}`);

    return(
        (dispatch) => {
            getQuery.then((res) => {
                let dates = res.data.dates;
                let volumes = res.data.volumes;
                let data = [];
                for(let i = 0; i < dates.length; i++){
                    data[i] = {x:i,y:volumes[i],label:dates[i]}
                }
                dispatch({
                    type:"OPTION_CLICKED",
                    dataForCanvas:data
                })
            })
        }
    )

}

/*
response structure
res.data = [...]
res.volumes = [...]
both have same index
*/