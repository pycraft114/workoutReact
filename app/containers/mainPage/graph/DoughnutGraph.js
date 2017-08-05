/**
 * Created by chanwoopark on 2017. 7. 11..
 */
import React,{ Component , PropTypes } from 'react';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import action_doughnutLoaded from 'actions/actionsForGraph/action_doughnutLoaded';

class DoughnutGraph extends Component{
    constructor(props){
        super(props)
    }

    componentWillMount(){
        this.props.action_doughnutLoaded();
    }

    shouldComponentUpdate(nextProps) {
        return (this.props.dataForDoughnut !== nextProps.dataForDoughnut)
    }


    componentDidUpdate(){
        const { dataForDoughnut } = this.props;
        var chart = new CanvasJS.Chart("doughnut-container",
            {
                title:{
                    text: "Days you have worked out",
                    verticalAlign: 'top',
                    horizontalAlign: 'left'
                },
                animationEnabled: true,
                data: [
                    {
                        type: "doughnut",
                        startAngle:270,
                        toolTipContent: "{label}: <strong>#percent%</strong>",
                        indexLabel: "{label}-{y} #percent%",
                        innerRadius:"90%",
                        dataPoints: [
                            {y: dataForDoughnut.daysWorkedOut, label: "Days you have worked out", color:"green"},
                            {y: dataForDoughnut.dayDifference - dataForDoughnut.daysWorkedOut, label: "Days you didn't" ,color:"lightgrey"},
                        ]
                    }
                ]
            });
        chart.render();
    }


    render(){
        console.log("doughnut graph component rendering");
        console.log(this.props.dataForDoughnut);
        return(
            <div id="doughnut-container" style={{height:90+"vh", width: 100+"%"}}></div>
        )
    }

}

const propTypes = {
    dataForDoughnut : PropTypes.object
};

DoughnutGraph.propTypes = propTypes;

function mapStateToProps(state){
    return({
        dataForDoughnut:state.dataForDoughnut
    })
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({action_doughnutLoaded},dispatch)

}

export default connect(mapStateToProps,mapDispatchToProps)(DoughnutGraph)