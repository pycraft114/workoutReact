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
            resultDate:null
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
        var year = date._d.getFullYear().toString();
        var month = date._d.getMonth().toString();
        var day = date._d.getDate().toString();
        var resultDate = year.concat("-",month,"-",day);
        console.log(resultDate);
        axios.post('/savedate',{"date":resultDate}).then(function(res){console.log(res)});
        this.setState({selectedDate:date,resultDate:resultDate});

    }

    onSelectChange(evt){
        var date = this.state.resultDate;
        var workout = evt.target.value;
        var newArr = [...this.state.selectedWorkout,workout];
        this.setState({selectedWorkout:newArr});

        axios.post('/savedateworkout',{"date":date,"selected_workout":newArr}).then(function(res){console.log(res)});
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
                    <SelectedWorkout
                        selected="Bench Press"
                    />
                    <WorkoutSelector
                        onSelectChange={this.onSelectChange}
                    />
                </div>
            </div>
        )
    }










}