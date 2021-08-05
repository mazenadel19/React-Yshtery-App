import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './NavigationBlack.module.css'

const NavigationBlack = () => {
	return (
		<header className={classes.header}>
			<nav className={classes.nav}>
				<ul>
					<li>
						<NavLink to='/men' activeClassName={classes.active}>
							Men
						</NavLink>
					</li>
					<li>
						<NavLink to='/women' activeClassName={classes.active}>
							Women
						</NavLink>
					</li>
					<li>
						<NavLink to='/unisex' activeClassName={classes.active}>
							Unisex
						</NavLink>
					</li>
					<li>
						<NavLink to='/kids' activeClassName={classes.active}>
							Kids
						</NavLink>
					</li>
					<li>
						<NavLink to='/bestsellers' activeClassName={classes.active}>
							Bestsellers
						</NavLink>
					</li>
					<li>
						<NavLink to='/newarrivals' activeClassName={classes.active}>
							New Arrival
						</NavLink>
					</li>
					<li>
						<NavLink to='/offers' activeClassName={classes.active}>
							Offers
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default NavigationBlack
