import React, { Component } from 'react';

const listDecorator = WrappedComponent => {
    class ListDecorator extends Component {
        constructor(props) {
            super(props);
        }
        render() {
            const data = [{
                name: 1,
            }, {
                name: 2,
            }]
            return (
                <WrappedComponent
                    data={data}
                    {...this.props}
                />
            )
        }
    }
    return ListDecorator;
}

export default listDecorator;