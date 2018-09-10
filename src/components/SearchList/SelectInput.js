import React, { Component } from 'react';

class SelectInput extends Component {
    render() {
        const { selectedItem, isAction, onClickHeader, placeholder } = this.props;
        return (
            <div>
                <div onClikc={onClickHeader}>
                    <Input
                        type="text"
                        disabled
                        value={text}
                        placeholder={placeholder}
                    />
                    <Icon className={isAction} name="angle-dom" />
                </div>
            </div>
        )
    }
}