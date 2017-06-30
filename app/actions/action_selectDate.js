/**
 * Created by chanwoopark on 2017. 6. 30..
 */
import axios from 'axios';

export default function(date){
    let year = date._d.getFullYear().toString();
    let month = (date._d.getMonth()+1).toString();
    let day = date._d.getDate().toString();
    let resultDate = year.concat("-",month,"-",day);
    console.log("date",resultDate);


    var postReq = axios.post('/getworkout',{"date":resultDate});

    return(dispatch) => {
        postReq.then((res) => {
            dispatch({type:"DATE_SELECTED", date: resultDate, response:res.data})
        })
    };


}