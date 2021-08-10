import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Cart from '../../Cart/Cart'
import Input from '../../UI/Input'
import classes from './NavigationTopWhite.module.css'

export default class NavigationTopWhite extends Component {
	render() {
		const { numberOfCartItems, items, totalAmount } = this.props.state
		return (
			<header className={classes.header}>
				<Input placeholder='search' width='250px' />
				<div className={classes.image}>
					<img src='/images/logo.png' alt='logo' />
				</div>
				<nav className={classes.nav}>
					<ul>
						<li>
							<span style={{ backgroundColor: 'yellowgreen' }}>
								{numberOfCartItems}
							</span>

							<NavLink to='/men'>
								<Cart items={items} totalAmount={totalAmount} />
							</NavLink>
						</li>
						<li>
							<NavLink to='/'>WishList</NavLink>
						</li>
						<li>
							<NavLink to='/'>Login</NavLink>
						</li>
					</ul>
				</nav>
			</header>
		)
	}
}
