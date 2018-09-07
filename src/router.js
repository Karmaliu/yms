import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
// import Loadable from 'react-loadable';

// const Loading = <div>1111</div>
// const LoadableComponent = Loadable({
//     loader: () => import('./layouts/BasicLayout'),
//     loading: Loading,
// });
import App from "./App";
const Home =()=> <div>3333</div>

const RouterConfig = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        </Router>
    )
}
export default RouterConfig;