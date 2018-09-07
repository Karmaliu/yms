import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Loadable from 'react-loadable';

const Loading = () => <div>1111</div>
const LoadableComponent2 = Loadable({
    loader: () => import('../pages/game.js'),
    loading: Loading,
});

const LoadableComponent1 = Loadable({
    loader: () => import('../pages/user.js'),
    loading: Loading,
});

export default class BasicLayout extends Component {
    render() {
        return (
            <div>
            111
                  <Route  exact path="/user" component={LoadableComponent2} />
                  <Route  exact path="/game" component={LoadableComponent1} />
            </div>
           
        
        )
    }
}