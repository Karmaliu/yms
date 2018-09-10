import React from 'react';
import { Input, Icon } from 'antd';
const SearchInput = ({ isActive, placeholder, text, changeVaule }) => {
    return (
        <div>
            <Input
                placeholder={placeholder}
                onChange={changeVaule}
                value={text}
                style={{ width: 200, margin: "20px 0px 0px 0px" }}
            />
        </div>
    )
}

export default SearchInput;