import React, { Component } from 'react';

import ButtonsContainer from '../containers/ButtonsContainer';
import Footer from './Footer';
import Form from './Form';
import List from './List';

class ToDoApp extends Component {
  state = {
    showToDo: true,
    showCompleted: true,
    displayTitles: false,
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const newValue = e.target.elements.inputValue.value.trim();
    e.target.elements.inputValue.value = '';

    if (newValue) {
      const timestamp = new Date().getTime();
      const newItem = {
        id: timestamp,
        name: newValue
      };
      this.props.addTask(newItem);
      this.setState({
        displayTitles: true
      });
    }
  }

  handleDeleteItem = (item) => {
    this.props.deleteTask(item.id);
  }

  handleToggleItem = (item) => {
    this.props.toggleTask(item);
  }

  showAll = () => {
    this.setState({
      showToDo: true,
      showCompleted: true
    });
  }

  showOnlyToDo = () => {
    this.setState({
      showToDo: true,
      showCompleted: false
    })
  }

  showOnlyCompleted = () => {
    this.setState({
      showToDo: false,
      showCompleted: true
    })
  }

  render() {
    const { toDoList, completedList } = this.props;
    const { showToDo, showCompleted, displayTitles } = this.state;
    return (
      <div className="container">
        <h3>ToDo App</h3>
        <Form handleSubmit={this.handleSubmit} />
        {showToDo &&
          <List
            title="ToDo Tasks"
            iterateList={toDoList}
            handleToggleItem={this.handleToggleItem}
            handleDeleteItem={this.handleDeleteItem}
            displayTitles={displayTitles}
          />
        }
        {showCompleted &&
          <List
            title="Completed Tasks"
            iterateList={completedList}
            handleToggleItem={this.handleToggleItem}
            handleDeleteItem={this.handleDeleteItem}
            displayTitles={displayTitles}
            completed
          />
        }
        <Footer
          numberOfItems={toDoList.length}
        />
        <ButtonsContainer
          toDoList={toDoList}
          completedList={completedList}
          showAll={this.showAll}
          showOnlyToDo={this.showOnlyToDo}
          showOnlyCompleted={this.showOnlyCompleted}
        />
      </div>
    );
  }
}

export default ToDoApp;