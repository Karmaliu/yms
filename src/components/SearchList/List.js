import React, { PureComponent } from 'react';
import CSSModules from 'react-css-modules';
import styles from './List.css';

@CSSModules(styles)
export default class List extends PureComponent {
    render() {
        console.log(this.props);
        const {
            data,
            handleGetValue,
            listDisplay,
        } = this.props;
        const UsreList = data.map(child => {
            return <li styleName="list_item" onClick={() => handleGetValue(child.name)} key={child.name}>{child.name}</li>
        })
        return (
            listDisplay ? <div>{UsreList}</div> : ''
        )
    }
}