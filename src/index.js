import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Navigation from './components/Navigation';
import App from './components/App';
import Jokes from './components/Jokes';
import MusicMaster from './projects/music-master/src';
import BusinessPrototypes from './projects/business-prototypes/src';
import 'jquery/dist/jquery.min.js';
import 'knockout/build/output/knockout-latest.js';
import './index.css';
import '@fortawesome/fontawesome-free/js/all.js';
import '@fortawesome/fontawesome-free/css/all.css';

ReactDOM.render(
    <Router history={createBrowserHistory()}>
        <Switch>
            <Route exact path="/" render={() => <Navigation><App /></Navigation>}></Route>
            <Route path="/jokes" render={() => <Navigation><Jokes /></Navigation>}></Route>
            <Route path="/music-master" render={() => <Navigation><MusicMaster /></Navigation>}></Route>
            <Route path="/business-prototypes" render={() => <Navigation><BusinessPrototypes /></Navigation>}></Route>
        </Switch>
    </Router>,

    document.getElementById('root')
);


