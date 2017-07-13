/**
 * Created by chanwoopark on 2017. 6. 29..
 */
import React,{Component} from 'react';



import List from './list/List';
import LineGraph from './graph/LineGraph';
import DoughnutGraph from './graph/DoughnutGraph'


export default class MainPage extends Component{
    constructor(props){
        super(props);

    }
    render(){
        console.log("main page rendering");
        return(
                <div className="main-page">
                    <DoughnutGraph/>
                    <List/>
                    <LineGraph/>
                </div>

        )
    }

}


