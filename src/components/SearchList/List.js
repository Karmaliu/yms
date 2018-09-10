import React from 'react';

const List = ({ data, handleGetValue }) => {
    const UsreList = data.map(child => {
        return <li onClick={() => handleGetValue(child.name)} key={child.name}>{child.name}</li>
    })
    return (
        <div>{UsreList}</div>
    )
}

export default List;