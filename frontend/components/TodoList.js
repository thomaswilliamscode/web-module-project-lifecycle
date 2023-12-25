import React from 'react'
import Todo from './Todo'

// this will display list of todos

// when toggle is clicked, filter what is shown

// otherwise show all todos

export default class TodoList extends React.Component {

  render() {
    // console.log(this.props.todos);
    return (
      this.props.todos.map( (todo) => {
        return (
					<Todo
						todo={todo}
						key={todo.id}
						toggleComplete={this.props.toggleComplete}
            showAll = {this.props.showAll}
					/>
				);
      })
    )
  }
}
