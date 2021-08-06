import React from 'react'
import { NavLink } from 'react-router-dom'
import Input from '../../UI/Input'
import classes from './NavigationTopWhite.module.css'

const NavigationTopWhite = props => {
	const cartHandler = () => {
		props.showTheModal()
	}

	return (
		<>
			<header className={classes.header}>
				<Input placeholder='search' width='250px' />
				<div className={classes.image}>
					<img src='/images/logo.png' alt='logo' />
				</div>
				<nav className={classes.nav}>
					<ul>
						<li>
							<NavLink
								to='/men'
								activeClassName={classes.active}
								onClick={cartHandler}>
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
		</>
	)
}

export default NavigationTopWhite
