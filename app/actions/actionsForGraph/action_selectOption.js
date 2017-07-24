/**
 * Created by chanwoopark on 2017. 7. 6..
 */
import axios from 'axios';
import {OPTION_CLICKED} from '../actionTypes';
export default function(selectedOption){
    const token = localStorage.getItem('token');
    const getQuery = axios.get(`/volumes/${selectedOption}`,{headers:{token}});

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
                    type:OPTION_CLICKED,
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