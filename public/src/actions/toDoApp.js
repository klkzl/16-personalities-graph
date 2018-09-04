export const ADD_TASK = 'add-task';
export const DELETE_TASK ='delete-task';
export const TOGGLE_TASK = 'toggle-task';
export const DELETE_COMPLETED = 'delete-completed';

const addTask = newTask => ({ type: ADD_TASK, task: newTask });
const deleteTask = id => ({ type: DELETE_TASK, id });
const toggleTask = newTask => ({ type: TOGGLE_TASK, task: newTask });
const deleteCompleted = () => ({ type: DELETE_COMPLETED })

export { addTask, deleteTask, toggleTask, deleteCompleted };