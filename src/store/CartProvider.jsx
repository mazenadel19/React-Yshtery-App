import React, { Component } from 'react'
import CartContext from './cart-context'

export default class CartProvider extends Component {
	state = {
		items: [],
		totalAmount: 0,
	}

	addItemToCartHandler = item => {
		const updatedItems = this.state.items.concat(item)
		const updatedAmount = this.state.totalAmount + item.price * item.amount

		this.setState(prevState => ({
			items: updatedItems,
			totalAmount: updatedAmount,
		}))
	}

	cartContext = {
		items: this.state.items,
		totalAmount: this.state.totalAmount,
		addItem: this.addItemToCartHandler,
	}

	render() {
		console.log(this.cartContext)
		console.log(this.state)
		return (
			<CartContext.Provider value={this.cartContext}>
				{this.props.children}
			</CartContext.Provider>
		)
	}
}
