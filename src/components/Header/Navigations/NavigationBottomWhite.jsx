import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './NavigationBottomWhite.module.scss'
import { useLocation } from 'react-router-dom'

const NavigationBottomWhite = ({ state }) => {

	let { pathname } = useLocation()

	return (
		<>
			<header className={classes.header}>
				<nav className={classes.nav}>
					<ul>
						<li>
							<NavLink to={pathname} className={classes.active}>
								<span>{pathname.slice(1)}</span>
							</NavLink>
						</li>
						<li>
							<NavLink to='#' className={classes.active}>
								<span>Clothing</span>
							</NavLink>
						</li>
						<li>
							<NavLink to='#' className={classes.active}>
								<span>Tops</span>
							</NavLink>
						</li>
						<li>
							<NavLink to='#' className={classes.active}>
								<span>Adidas</span>
							</NavLink>
						</li>
						<li>
							<NavLink to='#'>
								<span>{state.currentProductName}</span>
							</NavLink>
						</li>
					</ul>
				</nav>
			</header>
		</>
	)
}

export default NavigationBottomWhite
