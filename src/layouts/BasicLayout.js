import React, { Component } from 'react';
import { Route } from "react-router-dom";

import loadableRouter from '../utils/loadableRouter';

export default class BasicLayout extends Component {
    render() {
        return (
            <div>
                <Route exact path="/user" component={loadableRouter({ loader: () => import('../pages/user') })} />
                <Route path="/game" component={loadableRouter({ loader: () => import('../pages/game') })} />
            </div>
        )
    }
}