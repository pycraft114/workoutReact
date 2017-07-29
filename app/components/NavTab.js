/**
 * Created by chanwoopark on 2017. 7. 27..
 */
import React,{ Component } from 'react';
import { Link } from 'react-router-dom';


export default class NavTab extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <ol className="breadcrumb">
                <li><Link to="/main/record/chest">Chest</Link></li>
                <li><Link to="/main/record/leg">Leg</Link></li>
                <li><Link to="/main/record/back">Back</Link></li>
                <li><Link to="/main/graph">test</Link></li>
            </ol>
        )
    }
}

