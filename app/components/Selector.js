/**
 * Created by chanwoopark on 2017. 7. 8..
 */
import axios from 'axios';


import React,{Component} from 'react';
import { DropdownButton, MenuItem} from 'react-bootstrap';

var haha = [1,2,34];

export default class Selector extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <DropdownButton
                id={this.props.id}
                bsStyle={this.props.bsStyle}
                title={this.props.title}
                onSelect={this.props.onSelect}
            >
                {
                    this.props.options.map(
                        function(currType){
                            return <MenuItem
                                key={currType}
                                eventKey={currType}
                            >
                                {currType}
                            </MenuItem>
                        }
                    )
                }
            </DropdownButton>
        )
    }
}