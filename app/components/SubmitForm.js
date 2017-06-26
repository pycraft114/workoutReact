/**
 * Created by chanwoopark on 2017. 6. 23..
 */
import React,{Component} from 'react';

export default class SubmitForm extends Component{
    constructor(props){
        super(props);
    }

    //array of object를 받는게 나을것 같아
    //props.inputTags = [{id : x, placeholder : y, evt : func},{id : x, placeholder : y, evt : func}]
    //props.button = {context : x ,evt : func}
    render(){
        return(
            <div className="submit-form-container">
                <h1 className="header">{this.props.header}</h1>
                <form className="submit-form">
                    {
                        this.props.inputTags.map(function(currObj,index){
                            return (
                                <input
                                    key={index}
                                    id={currObj.id}
                                    className="input"
                                    type="text"
                                    placeholder={currObj.placeholder}
                                    onChange={currObj.evt}
                                />
                            )
                        })
                    }
                    <button
                        type="submit"
                        className="button"
                        onClick={this.props.button.evt}
                    >
                        {this.props.button.context}
                    </button>
                </form>
            </div>
        )
    }
}