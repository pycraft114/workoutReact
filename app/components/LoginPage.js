/**
 * Created by chanwoopark on 2017. 6. 23..
 */
import React from 'react';
import {Route} from 'react-router-dom';
import LoginSignUpFrom from './LoginSignUpForm';


export default class LoginPage extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="login-page">
                <video className="video" autoPlay="true" loop>
                    <source src="./skateboard.mp4" type="video/mp4" />
                </video>
                <section className="login-signup-section">
                    <h1 className="consistency">CONSISTENCY</h1>

                    <LoginSignUpFrom/>

                </section>

            </div>
        )
    }











}