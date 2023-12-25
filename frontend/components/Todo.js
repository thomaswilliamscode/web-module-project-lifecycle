import React from 'react'

// if hidden is true & completed is true, return empty 
// else return data


export default class Todo extends React.Component {
	view = () => {
    let { name, id, completed } = this.props.todo;
		let {showAll} = this.props
    if (showAll || !completed) {
			return (
				<>
					<p onClick={() => this.props.toggleComplete(id)}>
						{name} {completed ? `✅` : null}
					</p>
					<br />
				</>
			);
		} else {
      return
		}
	};
	render() {
		return (
			<div>
				{this.view()}
			</div>
		);
	}
}
