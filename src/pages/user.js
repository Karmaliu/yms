import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import SearchInput from '../components/SearchList/SearchInput';
import serchDecorator from '../components/SearchList/serchDecorator';
import List from '../components/SearchList/List';
import listDecorator from '../components/SearchList/listDecorator';


@serchDecorator
@listDecorator
@connect()
export default class User extends PureComponent {
    constructor(props) {
        super(props)
    }
    render() {
        const {
            placeholder,
            changeVaule,
            text,
            data,
            handleGetValue,
        } = this.props;
        return (
            <div>
                <SearchInput
                    changeVaule={changeVaule}
                    placeholder={placeholder}
                    text={text}

                />
                <List
                    data={data}
                    handleGetValue={handleGetValue}
                />
            </div>
        )
    }
}