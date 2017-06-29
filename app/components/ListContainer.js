/**
 * Created by chanwoopark on 2017. 6. 29..
 */
import React,{Component} from 'react';
import axios from 'axios';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';
import VolumeContainer from './volume/VolumeContainer';
import WorkoutContainer from './workout/WorkoutContainer';





export default class ListContainer extends Component{
    constructor(props){
        super(props);

        this.state = {
            selectedDate:null,
            selectedWorkout:[],
            resultDate:null,
            error:{
                NOT_FOUND:"NOT_FOUND"
            }
        };

        this.onDateChange = this.onDateChange.bind(this);
        this.onSelectChange = this.onSelectChange.bind(this);
        this.renderWorkoutContainer = this.renderWorkoutContainer.bind(this);
    }

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





    render(){
        return(
            <BrowserRouter>
                <div className="list-container">
                    <Switch>
                        <Route path="/a" render={this.renderWorkoutContainer}/>
                        <Route path="/" component={VolumeContainer}/>
                        <Route path="#/haha" render={function(){return(<div>haha</div>)}}/>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }



}



