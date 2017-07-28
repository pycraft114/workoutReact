/**
 * Created by chanwoopark on 2017. 7. 27..
 */
import React,{ Component } from 'react';
import { withRouter, Link, BrowserRouter} from 'react-router-dom';
import { connect } from 'react-redux';


class NavTab extends Component {
    constructor(props){
        super(props);
    }


    render(){
        return(
            <ol className="breadcrumb">
                <li><Link to="/main/record/chest">Chest</Link></li>
                <li><Link to="/main/record/leg">Leg</Link></li>
                <li><Link to="/main/record/back">Back</Link></li>
            </ol>
        )
    }
}

export default withRouter(connect()(NavTab))
