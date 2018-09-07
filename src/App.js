import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './App.css';

@CSSModules(styles)
export default class App extends Component {
  render() {
    return (
      <div>
        <div styleName="root__header">
          <button styleName="root__header__button__red">红色</button>
          <button styleName="root__header__button__blue">蓝色</button>
          <button styleName="header_button">绿色</button>
          <button styleName="header_button">黄色</button>
        </div>
      </div>
    );
  }
}

