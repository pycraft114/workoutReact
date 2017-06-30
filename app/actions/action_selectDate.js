/**
 * Created by chanwoopark on 2017. 6. 30..
 */
import axios from 'axios';

export default function(date){
    let year = date._d.getFullYear().toString();
    let month = date._d.getMonth().toString();
    let day = date._d.getDate().toString();
    let resultDate = year.concat("-",month,"-",day);


    axios.post('/getworkout',{"date":resultDate}).then(function(res){
        const data = res.data;

        if(data !== "haha"){
            //밑에 둘라인 얘네는 왜 동기적으로 실행???
            console.log("haha");
        }else{
            return{
                type:"DATE_SELECTED",
                payload:{date:date,selectedWorkout:[]}
            }
        }
    });

    return{
        type:"DATE_SELECTED",
        payload:{date:date,selectedWorkout:[]}
    }

}