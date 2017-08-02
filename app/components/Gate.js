import React, { Component } from 'react';

import { Redirect , Route } from 'react-router-dom';

export default function Gate({component:Component,isAuthed,path,redirUrl}){
    console.log("gate",this);
    return(
        <Route path={path} render={
            (props) => {
                if(isAuthed){
                    return <Component/>
                }else{
                    return <Redirect to={{pathname:redirUrl, state:{from:props.location}}}/>
                }
            }

        }/>
    )
}
