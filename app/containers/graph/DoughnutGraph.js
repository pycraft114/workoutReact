/**
 * Created by chanwoopark on 2017. 7. 11..
 */
import React,{Component} from 'react';
import {connect} from 'react-redux';

class DoughnutGraph extends Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        var chart = new CanvasJS.Chart("chartContainer",
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
                        indexLabel: "{label} -{y}#percent%",
                        innerRadius:"90%",
                        dataPoints: [
                            {  y: this.props.dataForDoughnut.daysWorkedOut, label: "Archives", color:"lightgreen"},
                            {  y: this.props.dataForDoughnut.dayDifference-this.props.dataForDoughnut.daysWorkedOut, label: "Inbox" ,color:"blue"},
                        ]
                    }
                ]
            });
        chart.render();
    }

    componentDidUpdate(){
        var chart = new CanvasJS.Chart("chartContainer",
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
                            {  y: this.props.dataForDoughnut.daysWorkedOut, label: "Archives", color:"lightgreen"},
                            {  y: this.props.dataForDoughnut.dayDifference-this.props.dataForDoughnut.daysWorkedOut, label: "Inbox" ,color:"blue"},
                        ]
                    }
                ]
            });
        chart.render();
    }

    render(){
        return(

            <div id="chartContainer" style={{height:300+"px", width: 100+"%"}}></div>

        )
    }

}

function mapStateToProps(state){
    return({
        dataForDoughnut:state.dataForDoughnut
    })
}

export default connect(mapStateToProps,null)(DoughnutGraph)