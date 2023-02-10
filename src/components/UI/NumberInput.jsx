import React, { Component } from 'react'
import classes from './NumberInput.module.scss'

export default class NumberInput extends Component {
	render() {
		return (
			<div class={classes.NumberInput}>
				<span
					class={classes['input-number-decrement']}
					onClick={this.props.decreaseValue}>
					–
				</span>
				<input
					class={classes['input-number']}
					id='number'
					type='text'
					{...this.props.input}
					value={this.props.value}
					onChange={this.props.inputHandler}
				/>
				<span
					class={classes['input-number-increment']}
					onClick={this.props.increaseValue}>
					+
				</span>
			</div>
		)
	}
}
