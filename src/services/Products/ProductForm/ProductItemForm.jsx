import React, { Component } from 'react'
import Input from '../../../components/UI/Input'
import classes from './ProductItemForm.module.css'

export default class ProductItemForm extends Component {
	state = {
		amountIsValid: true,
		amountInput: 1,
	}

	inputHandler = e => {
		const amountInput = e.target.value
		this.setState(prevstate => ({
			amountIsValid: prevstate.amountIsValid,
			amountInput,
		}))
	}

	submitHandler = event => {
		event.preventDefault()

		const enteredAmount = this.state.amountInput.toString()
		const enteredAmountNumber = Number(enteredAmount)

		if (
			enteredAmount.trim().length === 0 ||
			enteredAmountNumber < 1 ||
			enteredAmountNumber > 5
		) {
			return this.setState(prevstate => ({
				amountIsValid: false,
				amountInput: prevstate.amountInput,
			}))
		}

		this.setState(prevstate => ({
			amountIsValid: true,
			amountInput: prevstate.amountInput,
		}))

		this.props.onAddToCart(enteredAmountNumber)
	}

	render() {
		return (
			<form className={classes.form}>
				<Input
					inputHandler={this.inputHandler}
					value={this.state.amountInput}
					input={{
						id: 'amount_' + this.props.id,
						type: 'number',
						min: '1',
						max: '5',
						step: '1',
					}}
				/>
				<button onClick={this.submitHandler}>+ Add</button>
				{!this.state.amountIsValid && <p>please enter a valid amount(1-5)</p>}
			</form>
		)
	}
}
