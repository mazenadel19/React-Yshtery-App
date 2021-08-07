import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import CartContext from '../../../store/cart-context'
import Input from '../../UI/Input'
import classes from './NavigationTopWhite.module.css'

export default class NavigationTopWhite extends Component {
	static contextType = CartContext

	state = {
		numberOfCartItems: 0,
	}

	cartHandler = () => {
		this.props.showTheModal()
	}

	handler = () => {
		console.log('clicked')
		console.log(this.context)
		console.log(this.context.items)
		this.setState({
			numberOfCartItems: this.context.items.reduce(
				(currentVal, acc) => currentVal + acc.amount,
				0,
			),
		})
	}

	render() {
		return (
			<CartContext.Consumer>
				{ctx => (
					<header className={classes.header}>
						<Input placeholder='search' width='250px' />
						<div className={classes.image}>
							<img src='/images/logo.png' alt='logo' />
						</div>
						<nav className={classes.nav}>
							<ul>
								<li>
									<span
										style={{ backgroundColor: 'yellowgreen' }}
										onClick={this.handler}>
										{/* {ctx.items.reduce(
											(currentVal, acc) => currentVal + acc.amount,
											0,
										)} */}
										{this.state.numberOfCartItems}
									</span>
									<NavLink
										to='/men'
										activeClassName={classes.active}
										onClick={this.cartHandler}>
										Cart
									</NavLink>
								</li>
								<li>
									<NavLink to='/' activeClassName={classes.active}>
										WishList
									</NavLink>
								</li>
								<li>
									<NavLink to='/' activeClassName={classes.active}>
										Login
									</NavLink>
								</li>
							</ul>
						</nav>
					</header>
				)}
			</CartContext.Consumer>
		)
	}
}
