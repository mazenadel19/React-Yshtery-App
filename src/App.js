import React, { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Layout from './components/UI/Layout'
import Bestsellers from './pages/Bestsellers'
import Kids from './pages/Kids'
import Men from './pages/Men'
import Newarrivals from './pages/Newarrivals'
import NotFound from './pages/NotFound'
import Offers from './pages/Offers'
import Unisex from './pages/Unisex'
import Women from './pages/Women'

export default class App extends Component {
	state = {
		items: [],
		totalAmount: 0,
		numberOfCartItems: 0,
	}

	addItemToCartHandler = item => {
		const existingCartItemIndex = this.state.items.findIndex(
			product => product.id === item.id,
		)
		const existingCartItem = this.state.items[existingCartItemIndex]

		let updatedItems
		if (existingCartItem) {
			let updatedItem = {
				...existingCartItem,
				amount: existingCartItem.amount + item.amount,
			}
			updatedItems = [...this.state.items]
			// updatedItem[existingCartItemIndex] = updatedItem
			updatedItems[existingCartItemIndex] = updatedItem
		} else {
			updatedItems = this.state.items.concat(item)
		}

		const updatedTotalAmount = this.state.totalAmount + item.price * item.amount
		const updatedNumberOfCartItems = updatedItems.length

		this.setState(prevState => ({
			items: updatedItems,
			totalAmount: updatedTotalAmount,
			numberOfCartItems: updatedNumberOfCartItems,
		}))
	}

	render() {
		return (
			<Layout state={this.state}>
				<Switch>
					<Route path='/' exact>
						<Redirect to='/men' />
					</Route>
					<Route path='/men'>
						<Men addItemToCartHandler={this.addItemToCartHandler} />
					</Route>
					<Route path='/women'>
						<Women />
					</Route>
					<Route path='/unisex'>
						<Unisex />
					</Route>
					<Route path='/kids'>
						<Kids />
					</Route>
					<Route path='/bestsellers'>
						<Bestsellers />
					</Route>
					<Route path='/newarrivals'>
						<Newarrivals />
					</Route>
					<Route path='/offers'>
						<Offers />
					</Route>
					<Route path='*'>
						<NotFound />
					</Route>
				</Switch>
			</Layout>
		)
	}
}
