/**
 * Created by chanwoopark on 2017. 7. 6..
 */
import axios from 'axios';

export default function(selectedOption){
    var getQuery = axios.get(`/volumes/${selectedOption}`);

    return(
        (dispatch) => {
            getQuery.then((res) => {
                dispatch({
                    type:"OPTION_CLICKED",
                    dates:res.data.dates,
                    volumes:res.data.volumes
                })
            })
        }
    )

}