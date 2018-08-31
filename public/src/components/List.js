import React from 'react';

const List = ({ iterateList, title, handleDeleteItem, handleToggleItem }) => (
  <div>
    <h4>{title}</h4>
    <ul>
      {iterateList.map(item => (
        <li key={item.id}>
          {item.name}
          <button onClick={(e) => handleToggleItem(item)}>comp</button>
          <button  onClick={(e) => handleDeleteItem(item)}>del</button>
        </li>
      ))}
    </ul>
  </div>
);

export default List;