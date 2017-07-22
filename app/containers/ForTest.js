/**
 * Created by chanwoopark on 2017. 7. 22..
 */
import React,{ Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { browserHistory, withRouter } from 'react-router';
import LoginSignUpPage from './LoginSignUpPage';
import MainPage from './MainPage';
import Gate from './Gate';
import { connect } from 'react-redux'



class ForTest extends Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        console.log("fortest mounted");
    }

    componentDidUpdate(){
        console.log("fortest updated");
    }

    shouldComponentUpdate(){
        return true;
    }

    render(){
        return(
            <BrowserRouter history ={browserHistory}>
                <Switch>
                    <Gate exact={true} path="/main" bool={this.props.isAuthed} redirUrl="/" component={MainPage}/>
                    <Gate exact={true} path="/" bool={!this.props.isAuthed} redirUrl="/main" component={LoginSignUpPage}/>
                </Switch>
            </BrowserRouter>
        )
    }

}

function mapStateToProps(state){
    return {isAuthed : state.isAuthed}
}

export default withRouter(connect(mapStateToProps,null)(ForTest));