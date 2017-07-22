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

    render(){
        return(
            <BrowserRouter history ={browserHistory}>
                <Switch>
                    <Route path="/main" component={Gate(MainPage)}/>
                    <Route path="/" component={LoginSignUpPage}/>
                </Switch>
            </BrowserRouter>
        )
    }

}

function mapStateToProps(state){
    return {isAuthed : state.isAuthed}
}

export default withRouter(connect(mapStateToProps,null)(ForTest));