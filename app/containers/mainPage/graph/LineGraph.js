/**
 * Created by chanwoopark on 2017. 7. 6..
 */
import axios from 'axios';

import React,{Component} from 'react';
import { connect } from 'react-redux';
import Selector from '../../../components/Selector';
import action_selectOption from '../../../actions/action_selectOption';
import {bindActionCreators} from 'redux';


 class GraphContainer extends Component{
    constructor(props){
        super(props);
        this.initiateChart = this.initiateChart.bind(this);
    }

    initiateChart(){
        var chart = new CanvasJS.Chart("chartContainer", {
            animationEnabled: true,
            title:{
                text:"Your Volume Growth"
            },
            data: [
                {
                    type: "line",
                    dataPoints:this.props.dataForCanvas
                }
            ]
        });

        chart.render();
    }

    componentDidMount(){
        this.initiateChart();
    }

    componentDidUpdate(){
        this.initiateChart();
    }

    render(){
        return(
            <div className="line-graph-container">
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
        dataForCanvas:state.dataForCanvas
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        action_selectOption
    },dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(GraphContainer);