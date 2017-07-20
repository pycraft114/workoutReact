/**
 * Created by chanwoopark on 2017. 6. 23..
 */
import React,{Component} from 'react';

export default class SubmitForm extends Component{
    constructor(props){
        super(props);

    }

    componentDidMount(){
        console.log(this.props.haha);
    }

    componentDidUpdate(){
        console.log(this.props.haha);
    }
    //array of object를 받는게 나을것 같아
    //props.inputTags = [{id : x, placeholder : y, evt : func},{id : x, placeholder : y, evt : func}]
    //props.button = {context : x ,evt : func}
    render(){
        return(
            <div className="submit-form-container" autoComplete="off">
                <form className="submit-form">
                    {
                        this.props.inputTags.map(function(currObj,index){
                            return (
                                <input
                                    key={index}
                                    id={currObj.id}
                                    className="input"
                                    type={currObj.type || "text"}
                                    placeholder={currObj.placeholder}
                                    onChange={currObj.evt}
                                    autoComplete="new-password"
                                />
                            )
                        })
                    }
                    <input
                        type="submit"
                        className="button"
                        onClick={this.props.button.evt}
                        value={this.props.button.context}
                    />
                </form>
            </div>
        )
    }
}