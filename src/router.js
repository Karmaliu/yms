import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Loadable from 'react-loadable';

const Loading = () => <div>11112222</div>
const LoadableComponent = Loadable({
    loader: () => import('./layouts/BasicLayout'),
    loading: Loading,
});


const RouterConfig = () => {
    return (
        <Router>
            <Switch>
                 <Route  path="/" component={LoadableComponent} >
                </Route>
            </Switch>
        </Router>
    )
}
export default RouterConfig;