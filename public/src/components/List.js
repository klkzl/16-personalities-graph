import React from 'react';
import PropTypes from 'prop-types';

const List = ({ iterateList, title, handleDeleteItem, handleToggleItem, displayTitles, completed }) => (
  <div className={ 'list ' + (completed ? 'completed-list' : 'todo-list') }>
    { displayTitles && <h4>{title}</h4> }
    <ul>
      { iterateList.map(item => (
        <li key={item.id}>
          {item.name}
          <div className="list-buttons">
            <button onClick={(e) => handleToggleItem(item)}>
              <i className="icon-check"></i>
            </button>
            <button  onClick={(e) => handleDeleteItem(item)}>
              <i className="icon-cancel"></i>
            </button>
          </div>
        </li>
      ))
    }
    </ul>
  </div>
);

List.propTypes = {
  iterateList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  title: PropTypes.string.isRequired,
  handleDeleteItem: PropTypes.func.isRequired,
  handleToggleItem: PropTypes.func.isRequired,
  displayTitles: PropTypes.bool.isRequired,
}

export default List;