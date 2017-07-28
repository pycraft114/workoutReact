/**
 * Created by chanwoopark on 2017. 7. 6..
 */
import React,{ Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Selector from 'components/Selector';
import action_selectOption from 'actions/actionsForGraph/action_selectOption';
import { bindActionCreators } from 'redux';


 class LineGraph extends Component{
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

    //Render LineGraph when only data for canvas changes
    shouldComponentUpdate(nextProps){
        return (this.props.dataForCanvas !== nextProps.dataForCanvas)
    }

    render(){
        return(
            <div className="line-graph-container">
                <div id="chartContainer" style={{height:100+"%", width: 100+"%"}}></div>
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

const propTypes = {
    workoutOptions : PropTypes.array,
    dataForCanvas : PropTypes.array
};

LineGraph.propTypes = propTypes;

function mapStateToProps(state){
    return{
        workoutOptions:state.workoutOptions,
        dataForCanvas:state.dataForCanvas
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        action_selectOption
    },dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(LineGraph);