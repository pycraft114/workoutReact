/**
 * Created by chanwoopark on 2017. 7. 11..
 */
import React,{Component} from 'react';

export default class DoughnutGraph extends Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: [
                    "Red",
                    "Blue",
                    "Yellow"
                ],
                datasets: [
                    {
                        data: [300, 50, 100],
                        backgroundColor: [
                            "#FF6384",
                            "#36A2EB",
                            "#FFCE56"
                        ],
                        hoverBackgroundColor: [
                            "#FF6384",
                            "#36A2EB",
                            "#FFCE56"
                        ]
                    }
                ]
            },
            options: {
                cutoutPercentage:90,
                responsive:false,
                tooltips: {
                    callbacks: {
                        label: function(tooltipItem, data) {
                            var allData = data.datasets[tooltipItem.datasetIndex].data;
                            var tooltipLabel = data.labels[tooltipItem.index];
                            var tooltipData = allData[tooltipItem.index];
                            var total = 0;
                            for (var i in allData) {
                                total += allData[i];
                            }
                            var tooltipPercentage = Math.round((tooltipData / total) * 100);
                            return tooltipLabel + ': ' + tooltipData + ' (' + tooltipPercentage + '%)';
                        }
                    }
                }
            }
        });
    }

    render(){
        return(

                <canvas id="myChart">haha</canvas>

        )
    }

}
