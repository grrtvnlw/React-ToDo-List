import React, { Component } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import ToDo from './components/ToDo';
// import completeTasks from './components/completeTasks';
import { Button, Col, Row } from 'react-bootstrap'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      todos: [
        {
          name: 'Todo Item 1',
          complete: false,
        },
        {
          name: 'Todo Item the second',
          complete: false,
        },
        {
          name: 'The REAL todo item',
          complete: true,
        }
      ]
    }
  }

  onFormSubmit = (data) => {
    this.setState({
      todos: this.state.todos.concat(data)
    })
  }

  removeElement = (index) => {
    const filteredArray = this.state.todos.filter((_, i) => i !== index);
    this.setState({
      todos: filteredArray
    })
  }

  completeTask = (index) => {
    let newTodos = {...this.state.todos};
    newTodos[index].complete = true;
    this.setState({
      newTodos
    })
  }

  uncompleteTask = (index) => {
    let newTodos = {...this.state.todos};
    newTodos[index].complete = false;
    this.setState({
      newTodos
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Todo List</h1>
        </header>
        <ToDo onFormSubmit={ this.onFormSubmit }/>
        <h3>My Tasks</h3>
        <ul>
          { this.state.todos.map((todo, index) => {
            if (todo.complete === false) {
              return (
                <li key={ index }>{ todo.name }<Button className="btn btn-secondary p-1" onClick={ this.completeTask.bind(this, index) }>Done</Button><Button className="btn btn-danger p-1" onClick={ this.removeElement.bind(this, index) }>Remove</Button></li>
              )
            }
            return;
          })}
        </ul>
        <h3>Complete Tasks</h3>
        <ul>
          { this.state.todos.map((todo, index) => {
            if (todo.complete === true) {
              return (
                <li key={ index } className='strike'>{ todo.name }<Button className="btn btn-secondary p-1" onClick={ this.uncompleteTask.bind(this, index) }>Not Done</Button><Button className="btn btn-danger p-1" onClick={ this.removeElement.bind(this, index) }>Remove</Button></li>
              )
            }
            return;
          })}
        </ul>
      </div>
    );
  }
}

export default App;
