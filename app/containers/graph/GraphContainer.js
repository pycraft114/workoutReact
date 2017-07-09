/**
 * Created by chanwoopark on 2017. 7. 6..
 */
import React,{Component} from 'react';
import { connect } from 'react-redux';
import Selector from '../../components/Selector';
import action_clickOption from '../../actions/action_clickOption';
import {bindActionCreators} from 'redux';

 class GraphContainer extends Component{
    constructor(props){
        super(props)
    }
    componentDidUpdate(){
        var ctx = document.getElementById('myChart').getContext('2d');
        console.log(ctx);
        var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'line',

            // The data for our dataset
            data: {
                labels: this.props.datesForChart,
                datasets: [{
                    label: "My First dataset",
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: this.props.volumesForChart,
                }]
            },

            // Configuration options go here
            options: {}
        });
    }

    render(){
        return(
            <div className="haha">
                <canvas id="myChart"></canvas>
                <Selector
                    id="option-selector"
                    title="Option"
                    options={this.props.workoutOptions}
                    onSelect={
                        (evtKey) => {
                            this.props.action_clickOption(evtKey)
                        }
                    }
                />
                {this.props.datesForChart}
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
        action_clickOption
    },dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(GraphContainer);