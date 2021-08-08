import React, { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Cart from './components/Cart/Cart'
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
		modalVisiblity: false,
		items: [],
		totalAmount: 0,
		numberOfCartItems: 0,
	}

	showTheModal = () => {
		this.setState({ modalVisiblity: true })
	}
	hideTheModal = () => {
		this.setState({ modalVisiblity: false })
	}

	addItemToCartHandler = item => {
		const updatedItems = this.state.items.concat(item)
		const updatedTotalAmount = this.state.totalAmount + item.price * item.amount
		const updatedNumberOfCartItems = updatedItems.length
		
		this.setState(prevState => ({
			items: updatedItems,
			totalAmount: updatedTotalAmount,
			numberOfCartItems: updatedNumberOfCartItems,
			modalVisiblity: prevState.modalVisiblity,
		}))
	}

	render() {
		return (
			<Layout
				showTheModal={this.showTheModal}
				numberOfCartItems={this.state.numberOfCartItems}>
				{this.state.modalVisiblity && <Cart hideTheModal={this.hideTheModal} />}
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
