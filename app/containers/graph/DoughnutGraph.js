/**
 * Created by chanwoopark on 2017. 7. 11..
 */
import React,{Component} from 'react';
import {connect} from 'react-redux';

class DoughnutGraph extends Component{
    constructor(props){
        super(props)
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log("should called");
        console.log("next props",nextProps);
        console.log("next state",nextState);
        return true;
    }

    componentDidMount(){
        console.log("did mount called");
        var chart = new CanvasJS.Chart("doughnutContainer",
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
                            {y: this.props.dataForDoughnut.daysWorkedOut, label: "Days you have worked out", color:"green"},
                            {y: this.props.dataForDoughnut.dayDifference-this.props.dataForDoughnut.daysWorkedOut, label: "Days you didn't" ,color:"lightgrey"},
                        ]
                    }
                ]
            });
        chart.render();
    }


    render(){
        return(

            <div id="doughnutContainer" style={{height:300+"px", width: 100+"%"}}></div>

        )
    }

}

function mapStateToProps(state){
    return({
        dataForDoughnut:state.dataForDoughnut
    })
}

export default connect(mapStateToProps,null)(DoughnutGraph)