import React from 'react'
import Form from './Form'
import axios from 'axios'

const URL = 'http://localhost:9000/api/todos'


// after mount grab server info



// pass that info to form, TodoList, and Todo

// output that info

const initialState = [
	{
		name: 'Shower',
		id: 0,
		completed: false,
	},
	{
		name: 'Take Out Trash',
		id: 1,
		completed: false,
	},
	{
		name: 'Drink Water',
		id: 2,
		completed: false,
	},
];


export default class App extends React.Component {
	constructor() {
		super();
		this.state = {
			Todos: [],
		};
	}

	toggleComplete = (ID) => {
		this.setState((prevState) => ({
			...prevState,
			Todos: prevState.Todos.map((todo) => {
				let { id, completed } = todo;
				if (id === ID) {
					return { ...todo, completed: !completed };
				} else {
					return todo;
				}
			}),
		}));

		// patch
		// each time we change a Todos completed status,
		// we grab the id, send it to the server
    axios.patch(`${URL}/${ID}`)
      .then(res => console.log(res))
      .catch(err => console.error(err))
	};

	createTask = (name) => {
    let newTask = {
			name: name,
			completed: false,
		};
    return axios
      .post(URL, newTask)
      .then(res => {
        // console.log(res.data.data.id)
        let { id } = res.data.data
        newTask.id = id
        // console.log(newTask)
        return newTask;
      })
      .catch(err => console.error(err))
	};

	onClick = (name) => {
		this.createTask(name)
      .then((task) => {
        this.setState((prevState) => ({
          ...prevState,
          Todos: prevState.Todos.concat(task),
        }));
      })
      .catch(err => console.log(err))
		
	};

	componentDidMount() {
		axios
			.get(URL)
			.then((res) => {
	      let response = res.data.data
	      this.setState({ Todos: response})
	    })
			.catch((err) => console.error(err.message));
	}

	// post

  // check id before post, check id after post

  // after post update the id to be the new id
	componentDidUpdate() {
    let {Todos} = this.state
    let newTodo = Todos[Todos.length - 1];
    let { id } = newTodo
    console.log('we Updating...')
		// axios
		// 		.post(URL, newTodo)
		// 		.then((res) => {
    //       let response = res.data.message
    //       console.log(response)
    //     })
		// 		.catch((err) => console.error(err.message));
	}


  // idCheck = (serverId) => {
  //   if (serverId !==) {

  //   }
  // }




	render() {
		let { Todos } = this.state;
		return (
			<Form
				todos={Todos}
				toggleComplete={this.toggleComplete}
				onClick={this.onClick}
			/>
		);
	}
}
