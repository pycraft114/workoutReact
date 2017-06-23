/**
 * Created by chanwoopark on 2017. 6. 23..
 */
import React,{Component} from 'react';

export default class submitForm extends Component{
    constructor(props){
        super(props);
    }

    //array of object를 받는게 나을것 같아
    //props.inputTags = [{id : x, placeholder : y, evt : func},{id : x, placeholder : y, evt : func}]
    //props.button = [{context : x ,evt : func},{context : x,evt : func}]
    render(){
        return(
            <div className="submit-form-container">
                <form className="submit-form">
                    {props.children}
                </form>
            </div>
        )
    }
}