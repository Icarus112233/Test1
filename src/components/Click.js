import React, { Component } from 'react'

class Click extends Component {
	constructor() {
		super()
		this.state = {
			message: 'Click the button'
		}
	}
	changeMessage() {
		this.setState({
			message: 'Give me a thousand dollars'
		})
	}
	render() {
		return (
			<div>
				<h1>{this.state.message}</h1>
				<button onClick={() => this.changeMessage()}>
					Button
				</button>
			</div>
		)
	}
}

export default Click;