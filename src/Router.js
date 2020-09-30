import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import App from './App';
import LogIn from './components/pages/LogIn';
import SignUp from './components/pages/SignUp';

const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route exact path="/LogIn" component={LogIn}/>
            <Route exact path="/SignUp" component={SignUp}/>
        </Switch>
    </HashRouter>
);

export default BasicRoute;