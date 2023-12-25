import React from 'react'
import TodoList from './TodoList'

// this will hold the Form  elements

// ToDos: text

// List of todos

// text input field

// submit button

// button to toggle what is shown

export default class Form extends React.Component {
  constructor() {
    super()
    this.state={
      showAll: true,
      name: ''
    }
    // give this state to the to do map 
  }

  toggleShowAll = () => {
    this.setState( (prevState) => ({
      ...prevState,
      showAll: !prevState.showAll
    }))
  }

  onChange = (e) => {
    this.setState((prevState) => ({
			...prevState,
			name: e.target.value,
		}));
    
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.onClick(this.state.name);
    this.setState( (prevState) => ({
      ...prevState,
      name: ''
    }))

  }
  render() {
    return (
			<>
				<form onSubmit={this.onSubmit}>
					<h1>ToDos: </h1>
					<TodoList
						todos={this.props.todos}
						toggleComplete={this.props.toggleComplete}
						showAll={this.state.showAll}
					/>
					<br />
					<br />
					<input type='text' 
            onChange={this.onChange}
            placeholder='Type Todo'
            value={this.state.name}
            ></input>
					<input type='submit'  
                ></input>
				</form>
				<button onClick={this.toggleShowAll}>Change Stuff here</button>
			</>
		);
  }
}
