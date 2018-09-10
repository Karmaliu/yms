import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';

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
            <div>
                <Button type="primary">按钮</Button>
            </div>
        )
    }
}