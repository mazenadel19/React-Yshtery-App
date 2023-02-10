import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './NavigationBlack.module.scss'

const routes = ['Men', 'Women', 'Unisex', 'Kids', 'Bestsellers', 'New Arrivals','Offers']

const NavigationBlack = ({ currentProduct }) => {

	const routeClickHandler = () => currentProduct({})

	return (
		<header className={classes.header}>
			<nav className={classes.nav}>
				<ul>
					{routes.map((route) => <li key={route}>
						<NavLink to={`/${route.toLowerCase().replaceAll(' ','')}`} activeClassName={classes.active} onClick={routeClickHandler}>
							{route}
						</NavLink>
					</li>)}
				</ul>
			</nav>
		</header>
	)
}

export default NavigationBlack
