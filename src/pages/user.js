import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import SearchInput from '../components/SearchList/SearchInput';
import serchDecorator from '../components/SearchList/serchDecorator';
import List from '../components/SearchList/List';
import asyncSelectDecorator from '../components/SearchList/asyncSelectDecorator';


@asyncSelectDecorator
@serchDecorator
@connect()
export default class User extends PureComponent {
    render() {
        const {
            placeholder,
            changeVaule,
            text,
            handleGetValue,
            listDisplay,
            onClickHeader,
            activeData,
        } = this.props;
        return (
            <div>
                <SearchInput
                    changeVaule={changeVaule}
                    placeholder={placeholder}
                    onClickHeader={onClickHeader}
                    text={text}
                />
                <List
                    handleGetValue={handleGetValue}
                    listDisplay={listDisplay}
                    data={activeData}
                />
            </div>
        )
    }
}