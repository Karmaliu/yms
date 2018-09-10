import React, { Component } from 'react';


const serchDecorator = WrappedComponent => {
    class SerchDecorator extends Component {
        constructor(props) {
            super(props);
            this.state = {
                text: "",
            };
            this.changeVaule = this.changeVaule.bind(this);
            this.handleGetValue = this.handleGetValue.bind(this);
        }
        handleGetValue(value) {
            this.setState({
                text: value
            })
        }
        changeVaule(e) {
            this.setState({
                text: e.target.value,
            });
        }
        render() {
            const placeholder = "请选择";
            const { text } = this.state;
            return (
                <WrappedComponent
                    handleGetValue={this.handleGetValue}
                    changeVaule={this.changeVaule}
                    placeholder={placeholder}
                    text={text}
                    {...this.props}
                />
            );
        }
    }
    return SerchDecorator;
}

export default serchDecorator;