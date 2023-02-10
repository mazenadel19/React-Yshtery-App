import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './NavigationBottomWhite.module.scss'

const NavigationBottomWhite = () => {
	return (
		<>
			<header className={classes.header}>
				<nav className={classes.nav}>
					<ul>
						<li>
							<NavLink to='/men' className={classes.active}>
								<span>Men</span>
							</NavLink>
						</li>
						<li>
							<NavLink to='/' className={classes.active}>
								<span>Clothing</span>
							</NavLink>
						</li>
						<li>
							<NavLink to='/' className={classes.active}>
								<span>Tops</span>
							</NavLink>
						</li>
						<li>
							<NavLink to='/' className={classes.active}>
								<span>Adidas</span>
							</NavLink>
						</li>
						<li>
							<NavLink to='/'>
								<span>Adidas Black Tshirt</span>
							</NavLink>
						</li>
					</ul>
				</nav>
			</header>
		</>
	)
}

export default NavigationBottomWhite
