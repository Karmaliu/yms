import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import loadableRouter from '../utils/loadableRouter';
import styles from './BasicLayout.css';
import { Button } from 'antd';


export default class BasicLayout extends Component {
    render() {
        return (
            <div>
                <Button type="primary"><Link className={styles.link} to="user">User</Link></Button>
                <Button type="primary"><Link className={styles.link} to="game">Game</Link></Button>
                <Route exact path="/user" component={loadableRouter({ loader: () => import('../pages/user') })} />
                <Route path="/game" component={loadableRouter({ loader: () => import('../pages/game') })} />
            </div>
        )
    }
}