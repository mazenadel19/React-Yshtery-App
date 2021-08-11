import React, { Component } from 'react'
import NumberInput from '../../../components/UI/NumberInput'
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

	increaseValue = () => {
		this.setState(prevState => ({
			amountInput: prevState.amountInput + 1,
		}))
	}

	decreaseValue = () => {
		if (this.state.amountInput > 1) {
			this.setState(prevState => ({
				amountInput: prevState.amountInput - 1,
			}))
		}
	}

	render() {
		return (
			<form className={classes.form}>
				<strong>Quantity</strong>
				<NumberInput
					inputHandler={this.inputHandler}
					value={this.state.amountInput}
					increaseValue={this.increaseValue}
					decreaseValue={this.decreaseValue}
					input={{
						id: 'amount_' + this.props.id,
						type: 'number',
						min: '1',
						max: '5',
						step: '1',
					}}
				/>
				<div className={classes.buttonsWrapper}>
					<button onClick={this.submitHandler}>Add To Cart</button>
					<button className={classes.pickup}>Pickup From The Store</button>
				</div>
				{!this.state.amountIsValid && <p>please enter a valid amount(1-5)</p>}
			</form>
		)
	}
}
