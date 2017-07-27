/**
 * Created by chanwoopark on 2017. 7. 27..
 */
import React,{ Component } from 'react';

export default class NoMatch extends Component{
    constructor(props){
        super(props)
    }

    render(){
        console.log("no match component rendered");
        return(
            <div>
                No Match for the URL
            </div>
        )
    }

}