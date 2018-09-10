import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';

@connect()
export default class User extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            value: 0,
        }
    }
    componentDidMount() {
        this.props.dispatch({
            type: "queryUser",
            payload: { name: "11" },
        })
        function incrment(state, props) {
            return { value: state.value + 1 }
        }
        this.setState(incrment);
        this.setState(incrment);
        this.setState(incrment);
        this.setState({ value: this.state.value + 1 })
        this.setState(incrment);
    }
    render() {

        console.log(this.state.value);
        return (
            <div>
                <Button type="primary">按钮</Button>
            </div>
        )
    }
}