import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

@connect()
export default class User extends PureComponent {
    componentDidMount() {
        this.props.dispatch({
            type: "queryUser",
            payload: { name: "11" },
        })
    }
    render() {
        return (
            <div>111</div>
        )
    }
}