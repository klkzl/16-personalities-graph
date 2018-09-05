import { connect } from 'react-redux';
import ToDoApp from '../components/ToDoApp';
import { addTask, deleteTask, toggleTask } from '../actions/toDoApp';

const mapStateToProps = state => ({
  toDoList: state.toDoApp.toDoList,
  completedList: state.toDoApp.completedList
});

const mapDispatchToProps = {
  addTask, deleteTask, toggleTask
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoApp);