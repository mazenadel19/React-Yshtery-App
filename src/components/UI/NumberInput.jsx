import React, { Component } from 'react'
import classes from './NumberInput.module.scss'

export default class NumberInput extends Component {
	render() {
		return (
			<div className={classes.NumberInput}>
				<span
					className={classes['input-number-decrement']}
					onClick={this.props.decreaseValue}>
					–
				</span>
				<input
					className={classes['input-number']}
					id='number'
					type='text'
					{...this.props.input}
					value={this.props.value}
					onChange={this.props.inputHandler}
				/>
				<span
					className={classes['input-number-increment']}
					onClick={this.props.increaseValue}>
					+
				</span>
			</div>
		)
	}
}
