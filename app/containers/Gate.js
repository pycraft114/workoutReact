import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function(receivedComponent,bool){
    if(bool){
        return receivedComponent;
    }else{
        window.location.href = "/";
    }
}