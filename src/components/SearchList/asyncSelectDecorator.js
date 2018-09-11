import React, { Component } from 'react';

const asyncSelectDecorator = WrappedComponent => {
    class ASyncSelectDecorator extends Component {
        constructor(props) {
            super(props);
            this.state = {
                data: []
            }
        }
        componentDidMount() {
            const data = [{
                name: "1",
            }, {
                name: "11",
            }, {
                name: "2",
            }, {
                name: "214"
            }]
            this.setState({
                data,
            });
        }
        render() {
            return (
                <WrappedComponent
                    {...this.props}
                    data={this.state.data}
                />
            );
        }
    }
    return ASyncSelectDecorator;
}

export default asyncSelectDecorator;