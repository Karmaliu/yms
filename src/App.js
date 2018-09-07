import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './App.css';
import RouterConfig from './router';

@CSSModules(styles)
export default class App extends Component {
  render() {
    return (
      <div> 
        <RouterConfig />
      </div>
    );
  }
}

