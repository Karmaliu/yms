import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import loadableRouter from './utils/loadableRouter';

const RouterConfig = () => {
    return (
        <Router>
            <Switch>
                <Route exect path="/" component={loadableRouter({ loader: () => import('./layouts/BasicLayout') })} />
            </Switch>
        </Router>
    )
}
export default RouterConfig;