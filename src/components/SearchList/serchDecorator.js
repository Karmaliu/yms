import React, { Component } from 'react';

const serchDecorator = WrappedComponent => {
    class SerchDecorator extends Component {
        constructor(props) {
            super(props);
            this.state = {
                text: "",
                listDisplay: false,
                activeData: [],
            };
            this.changeVaule = this.changeVaule.bind(this);
            this.handleGetValue = this.handleGetValue.bind(this);
            this.onClickHeader = this.onClickHeader.bind(this);
        }
        handleGetValue(value) {
            this.setState({
                text: value,
            });
            this.setState({
                listDisplay: false,
            });
        }
        onClickHeader() {
            this.setState({
                listDisplay: !this.state.listDisplay,
            });

            this.setState({
                activeData: this.props.data,
            })
        }
        changeVaule(e) {
            const { value } = e.target;
            this.setState({
                activeData: value ? this.props.data.filter(child => child.name.indexOf(value) !== -1) : this.props.data,
            })
            this.setState({
                text: value,
            });
        }
        render() {
            const placeholder = "请选择";
            const { text, listDisplay, activeData } = this.state;
            return (
                <WrappedComponent
                    onClickHeader={this.onClickHeader}
                    handleGetValue={this.handleGetValue}
                    changeVaule={this.changeVaule}
                    placeholder={placeholder}
                    text={text}
                    activeData={activeData}
                    listDisplay={listDisplay}
                    {...this.props}
                />
            );
        }
    }
    return SerchDecorator;
}

export default serchDecorator;