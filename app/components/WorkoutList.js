/**
 * Created by chanwoopark on 2017. 6. 26..
 */
import React,{Component} from 'react';
import WorkoutSelector from './WorkoutSelector';
import SelectedWorkout from './SelectedWorkout';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import axios from 'axios';


import DatePicker from 'react-datepicker';

/*
* SelectedWorkout component에서 delete 버튼을 눌렀을때
* 현재 WorkoutList의 Ui가 변경이 되어야함.
* delete 버튼을 눌렀을때 일어날 이벤트를 이 컴포넌트에서 생성하고 매번 SelectedWorkout컴포넌트에 props로 전달해주는걸 방지하기위해
* redux action creater와 reducer가 있는것인가?
* 1.Date picker에서 date선택 (날짜 state에 유지하고있어야함, 선택하면 해당 날짜를 키로 가지는 데이터 render해야함)
* 2.WorkoutSelector에서 workout을 선택하면 db에 해당날짜로 selected workout 저장(서버에 post요청 보내야함)
* 3.workout-list에서 해당날짜에 맞는 모든 selected workout rendering
*
* */
export default class WorkoutList extends Component{
    constructor(props){
        super(props);

        this.state = {
            selectedDate:moment(),
            selectedWorkout:[],
            resultDate:null,
            error:{
                NOT_FOUND:"NOT_FOUND"
            }
        };

    this.onDateChange = this.onDateChange.bind(this);
    this.onSelectChange = this.onSelectChange.bind(this);
    }
    /*
    * datePicker가 modified 되었을때 일어나야 하는 일
    * 1.state의 selectedDate 이 선택된 날짜이어야 한다(rerendering)
    * 2.db에 선택한 날짜를 키로 하는 데이터를 가져온다.
    * 3.가져온 데이터를 클라이언트에서 조작해서 workout List가 render 되어야한다.
    *
    * */
    onDateChange(date) {
        let year = date._d.getFullYear().toString();
        let month = date._d.getMonth().toString();
        let day = date._d.getDate().toString();
        let resultDate = year.concat("-",month,"-",day);

        this.setState({selectedDate:date,resultDate:resultDate});



        const that = this;
        axios.post('/getworkout',{"date":resultDate}).then(function(res){
            const data = res.data;

            if(data !== that.state.error.NOT_FOUND){
                //밑에 둘라인 얘네는 왜 동기적으로 실행???
                that.setState({selectedWorkout:data});
                console.log(that.state.selectedWorkout);
            }else{
                that.setState({selectedWorkout:[]});
            }
        });


    }

    onSelectChange(evt){

        //시간 복잡도 n**2 너무느림
       /*function onlyUnique(value, index, self) {
            return self.indexOf(value) === index;
        }*/

        var date = this.state.resultDate;
        var workout = evt.target.value;
        var newArr = [...this.state.selectedWorkout,workout];

        var uniqueArr = [...new Set(newArr)];

        //밑에 둘라인 얘네는 왜 비동기적으로 실행???
        this.setState({selectedWorkout:uniqueArr});
        //console.log("line 85",this.state.selectedWorkout);

        axios.post('/savedateworkout',{"date":date,"selected_workout":uniqueArr}).then(function(res){console.log(res)});
    }

    render(){
        return(
            <div className="workout-list-container">
                <p>Date Picker</p>

                <DatePicker
                    selected={this.state.selectedDate}
                    onChange={this.onDateChange}
                />

                <div className="workout-list">
                    {
                        this.state.selectedWorkout.map(function(ele,idx){
                            return(
                                <SelectedWorkout
                                    key={idx}
                                    selected={ele}
                                />
                            )
                        })

                        /*<SelectedWorkout
                        selected="Bench Press"
                    />*/
                    }
                    <WorkoutSelector
                        onSelectChange={this.onSelectChange}
                    />
                </div>
            </div>
        )
    }










}