import React from 'react';
import PropTypes from 'prop-types';

const Buttons = ({ toDoList, completedList, showAll, showOnlyToDo, showOnlyCompleted, deleteCompleted }) => {

  const hasItemsToDisplay = toDoList.length !== 0 || completedList.length !== 0;

  return (
    <div className="buttons">
      { hasItemsToDisplay && (
        <div className="footer-buttons">
          <button onClick={showAll}>All</button>
          <button onClick={showOnlyToDo}>Active</button>
          <button onClick={showOnlyCompleted}>Completed</button>
          <button onClick={deleteCompleted}>Clear Completed</button>
        </div>
        )
      }
    </div>
  );
}

Buttons.propTypes = {
  toDoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  completedList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  showAll: PropTypes.func.isRequired,
  showOnlyToDo: PropTypes.func.isRequired,
  showOnlyCompleted: PropTypes.func.isRequired,
  deleteCompleted: PropTypes.func.isRequired
}

export default Buttons;