/**
 * Created by chanwoopark on 2017. 7. 22..
 */
import React,{ Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { browserHistory, withRouter } from 'react-router';
import LoginSignUpPage from './loginSignUpPage/LoginSignUpPage';
import MainPage from './mainPage/MainPage';
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
                    <Gate
                        component={LoginSignUpPage}
                        isAuthed={!this.props.isAuthed}
                        path="/login"
                        redirUrl="/main"
                    />
                    <Gate
                        component={MainPage}
                        isAuthed={this.props.isAuthed}
                        path="/main"
                        redirUrl="/login"
                    />
                </Switch>
            </BrowserRouter>
        )
    }

}

function mapStateToProps(state){
    return {isAuthed : state.isAuthed}
}

export default withRouter(connect(mapStateToProps,null)(ForTest));