/**
 * Created by chanwoopark on 2017. 8. 5..
 */
import React,{ Component } from 'react';

export default class LineGraphOptions extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <ul className="nav nav-pills nav-stacked" onClick={this.props.onClick}>
                {this.props.options.map(function(currentElement,idx){
                    return(
                        <li key={idx}><a>{currentElement}</a></li>
                    )
                })}
            </ul>
        )
    }
}

{/*<li className="active"><a href="#">Messages</a></li>*/}
