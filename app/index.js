import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore , applyMiddleware} from "redux";
import reducers from "./reducers/index";
import thunk from 'redux-thunk';


/////
import LoginSignUpPage from './containers/LoginSignUpPage';
import ListContainer from './containers/ListContainer';
import GraphContainer from './containers/graph/GraphContainer';
/////


require('./style/LoginSignUpForm.css');
require('./style/WorkoutList.css');

ReactDOM.render(
    <Provider store={createStore(reducers,applyMiddleware(thunk))}>
        <GraphContainer/>
    </Provider>
    , document.querySelector('.container')
);
