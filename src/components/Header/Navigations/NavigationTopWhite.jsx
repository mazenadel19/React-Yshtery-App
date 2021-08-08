import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Input from '../../UI/Input'
import classes from './NavigationTopWhite.module.css'

export default class NavigationTopWhite extends Component {
	cartHandler = () => {
		this.props.showTheModal()
	}

	render() {
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
								{this.props.numberOfCartItems}
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
		)
	}
}
