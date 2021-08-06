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
import Cart from './components/Cart/Cart';

export default class App extends Component {
	state = {
		modalVisiblity: false,
	}
	showTheModal = () => {
		this.setState({ modalVisiblity: true })
	}
	hideTheModal = () => {
		this.setState({ modalVisiblity: false })
	}

	render() {
		return (
			<>
				<Layout showTheModal={this.showTheModal}>
					{this.state.modalVisiblity && <Cart hideTheModal={this.hideTheModal} />}
					<Switch>
						<Route path='/' exact>
							<Redirect to='/men' />
						</Route>
						<Route path='/men'>
							<Men />
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
			</>
		)
	}
}
