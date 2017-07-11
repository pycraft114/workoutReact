/**
 * Created by chanwoopark on 2017. 7. 6..
 */
import axios from 'axios';

import React,{Component} from 'react';
import { connect } from 'react-redux';
import Selector from '../../components/Selector';
import action_selectOption from '../../actions/action_selectOption';
import {bindActionCreators} from 'redux';
var chart;

 class GraphContainer extends Component{
    constructor(props){
        super(props);
        this.initiateChart = this.initiateChart.bind(this);
    }

    initiateChart(){
        var chart = new CanvasJS.Chart("chartContainer", {
            data: [
                {
                    type: "column",
                    dataPoints: [
                        { x: 10, y: 10 },
                        { x: 20, y: 15 },
                        { x: 30, y: 25 },
                        { x: 40, y: 30 },
                        { x: 50, y: 28 }
                    ]
                }
            ]
        });

        chart.render();
    }

    componentDidMount(){
        this.initiateChart();
    }

    componentDidUpdate(){
        if(chart){
            chart.destroy();
        }
        this.initiateChart();
    }

    render(){
        return(
            <div className="haha">
                <div id="chartContainer" style={{height:300+"px", width: 300+"px"}}></div>
                <Selector
                    id="option-selector"
                    title="Option"
                    options={this.props.workoutOptions}
                    onSelect={
                        (evtKey) => {
                            this.props.action_selectOption(evtKey)
                        }
                    }
                />
            </div>
        )

    }

}

function mapStateToProps(state){
    return{
        selectedWorkouts:state.selectedWorkouts,
        selectedDate:state.selectedDate,
        workoutOptions:state.workoutOptions,
        datesForChart:state.datesForChart,
        volumesForChart:state.volumesForChart
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        action_selectOption
    },dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(GraphContainer);