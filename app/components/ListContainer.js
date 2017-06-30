/**
 * Created by chanwoopark on 2017. 6. 29..
 */
import React,{Component} from 'react';
import axios from 'axios';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';
import VolumeContainer from './volume/VolumeContainer';
import WorkoutContainer from './workout/WorkoutContainer';
import selectDate from '../actions/action_selectDate';
import selectWorkout from '../actions/action_selectWorkout';

import {connect} from 'react-redux';






export default class ListContainer extends Component{
    constructor(props){
        super(props);

        this.state = {
            selectedDate:null,
            selectedWorkout:[],
            resultDate:null,
            error:{
                NOT_FOUND:"NOT_FOUND"
            },
            kg:null,
            rep:null
        };

        /*this.onDateChange = this.onDateChange.bind(this);
        this.onSelectChange = this.onSelectChange.bind(this);
        this.onKgRepChange = this.onKgRepChange.bind(this);
        this.sendKgRep = this.sendKgRep.bind(this);
        this.renderVolumeContainer = this.renderVolumeContainer.bind(this);
        this.renderWorkoutContainer = this.renderWorkoutContainer.bind(this);*/
    }

    /*onDateChange(date) {
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
        /!*function onlyUnique(value, index, self) {
         return self.indexOf(value) === index;
         }*!/

        var date = this.state.resultDate;
        var workout = evt.target.value;
        var newArr = [...this.state.selectedWorkout,workout];

        var uniqueArr = [...new Set(newArr)];

        //밑에 둘라인 얘네는 왜 비동기적으로 실행???
        this.setState({selectedWorkout:uniqueArr});
        //console.log("line 85",this.state.selectedWorkout);

        axios.post('/savedateworkout',{"date":date,"selected_workout":uniqueArr}).then(function(res){console.log(res)});
    }

    onKgRepChange(evt){
        evt.target.id ==='kg' ? this.setState({kg:evt.target.value}) : this.setState({rep:evt.target.value});
    }

    sendKgRep(evt){
        if(evt.key === "Enter" || evt.target.id === "check"){
            if(this.state.kg && this.state.rep){
                console.log('called');
            }else{
                console.log("smth empty");
            }
        }
    }

    renderWorkoutContainer(){
        return(
            <WorkoutContainer
                selectedDate={this.state.selectedDate}
                onDateChange={this.onDateChange}
                selectedWorkout={this.state.selectedWorkout}
                onSelectChange={this.onSelectChange}
            />
        )
    }

    renderVolumeContainer(){
        return(
            <VolumeContainer
                onKgRepChange={this.onKgRepChange}
                sendKgRep={this.sendKgRep}
                kg={this.state.kg}
                rep={this.state.rep}
            />
        )
    }
*/




    render(){
        return(
            <BrowserRouter>
                <div className="list-container">
                    <Switch>
                        <Route path="/" component={WorkoutContainer}/>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }



}



