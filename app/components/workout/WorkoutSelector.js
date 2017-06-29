/**
 * Created by chanwoopark on 2017. 6. 26..
 */
import React,{Component} from 'react';


export default class WorkoutSelector extends Component{
    constructor(props){
        super(props);

        let options = ["Bench Press", "Squat", "Dead lift"];

        this.state = {
            options:options,
            selectedValue : "Bench Press"
        };

    }


    render(){


        return(
            <select onChange={this.props.onSelectChange}>
                {
                    this.state.options.map(function(currType){
                        return <option key={currType} value={currType}>{currType}</option>
                    })
                }
            </select>
        )
    }

}
