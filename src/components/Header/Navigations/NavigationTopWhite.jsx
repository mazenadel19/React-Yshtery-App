import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Cart from '../../Cart/Cart'
import Input from '../../UI/Input'
import classes from './NavigationTopWhite.module.scss'

export default class NavigationTopWhite extends Component {
	render() {
		const { numberOfCartItems, items, totalAmount } = this.props.state
		return (
			<header className={classes.header}>
				<Input placeholder='search' width='250px' type={'search'}/>
				<div className={classes.image}>
					<img src='/images/logo.png' alt='logo' />
				</div>
				<nav className={classes.nav}>
					<ul>
						<li>
							<span className={`${numberOfCartItems > 0 ? classes.fullCart : classes.emptyCart} ${classes.cartNumber}`}>{numberOfCartItems}</span>
							<Cart items={items} totalAmount={totalAmount} removeItem={this.props.removeItem} />
						</li>
						<li>
							<NavLink to='/'>
								<i className='fas fa-heart'></i> WishList
							</NavLink>
						</li>
						<li>
							<NavLink to='/'>
								<i className='fas fa-user-alt'></i> Login
							</NavLink>
						</li>
					</ul>
				</nav>
			</header>
		)
	}
}
