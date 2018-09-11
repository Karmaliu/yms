import React from 'react';
import { Input, Icon } from 'antd';
const SearchInput = ({ placeholder, text, changeVaule, onClickHeader }) => {
    return (
        <div  onClick={onClickHeader}>
            <div>
                <Input
                    placeholder={placeholder}
                    onChange={changeVaule}
                    value={text}
                    style={{ width: 200, margin: "20px 0px 0px 0px" }}
                />
            </div>
        </div>
    )
}

export default SearchInput;