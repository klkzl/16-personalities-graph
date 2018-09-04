import React from 'react';

const Buttons = ({ toDoList, completedList, showAll, showOnlyToDo, showOnlyCompleted, deleteCompleted }) => {
  const hasItemsToDisplay= toDoList.length !== 0 || completedList.length !== 0;
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

export default Buttons;