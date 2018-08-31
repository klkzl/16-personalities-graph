import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Form from './components/Form';
import List from './components/List';

class App extends Component {
  state = {
    toDoList: [],
    completedList: [],
    showToDo: true,
    showCompleted: true
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const newValue = e.target.elements.inputValue.value.trim();
    // e.target.elements.inputValue.value = '';

    if (newValue) {
      const timestamp = new Date().getTime();
      const newItem = {
        id: timestamp,
        name: newValue
      };
      this.setState(prevState => ({
        toDoList: [...prevState.toDoList, newItem]
        // toDoList: prevState.toDoList.concat(newItem)
      }))
    }
  }

  handleDeleteItem = (item) => {
    if (this.state.toDoList.includes(item)) {
      const newToDo =  this.state.toDoList.filter(currItem => currItem != item);
      this.setState({
        toDoList: [...newToDo]
      });
    } else {
      const newCompletedList = this.state.completedList.filter(currItem => currItem != item);
      this.setState({
        completedList: [...newCompletedList]
      });
    }
  }

  handleToggleItem = (item) => {
    if (this.state.toDoList.includes(item)) {
      const newToDo = this.state.toDoList.filter(currItem => currItem != item);
      this.setState(prevState => ({
        toDoList: [...newToDo],
        completedList: [...prevState.completedList, item]
      }));
    } else {
      const newCompletedList = this.state.completedList.filter(currItem => currItem != item);
      this.setState(prevState => ({
        completedList: [...newCompletedList],
        toDoList: [...prevState.toDoList, item]
      }));
    }
  }

  handleClearCompleted = () => {
    this.setState(() => ({
      completedList: []
    }));
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
    const { toDoList, completedList } = this.state;

    return (
      <div className="container">
        <h3>ToDo App</h3>
        <Form handleSubmit={this.handleSubmit} />
        {this.state.showToDo &&
          <List
            title="ToDo Tasks"
            iterateList={this.state.toDoList}
            handleToggleItem={this.handleToggleItem}
            handleDeleteItem={this.handleDeleteItem}
          />
        }
        {this.state.showCompleted &&
          <List
            title="Completed Tasks"
            iterateList={this.state.completedList}
            handleToggleItem={this.handleToggleItem}
            handleDeleteItem={this.handleDeleteItem}
          />
        }
        {toDoList.length > 0
          ? (<p>{toDoList.length} things left</p>)
          : (<p>nothing to do :)</p>)
        }
        <button onClick={this.showAll}>All</button>
        <button onClick={this.showOnlyToDo}>Active</button>
        <button onClick={this.showOnlyCompleted}>Completed</button>
        <button onClick={this.handleClearCompleted}>Clear Completed</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));