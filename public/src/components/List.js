import React from 'react';

const List = ({ iterateList, title, handleDeleteItem, handleToggleItem, displayTitles, completed }) => (
  <div className={'list ' + (completed ? 'completed-list' : 'todo-list')}>
    {displayTitles ? <h4>{title}</h4> : <div></div>}
    <ul>
      {iterateList.map(item => (
        <li key={item.id}>
          {item.name}
          <div className="list-buttons">
            <button onClick={(e) => handleToggleItem(item)}><i className="icon-check"></i></button>
            <button  onClick={(e) => handleDeleteItem(item)}><i className="icon-cancel"></i></button>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default List;