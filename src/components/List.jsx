import React from 'react';

const List = (props) => {
    return ( 
        <div className="list">
          <h1>{props.title}</h1>
          <p>{props.content}</p>
        </div>
    )
}

export default List;
