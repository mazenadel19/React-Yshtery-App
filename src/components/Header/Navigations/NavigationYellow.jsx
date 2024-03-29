
import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './NavigationYellow.module.scss'

const NavigationYellow = () => {
	return (
		<header className={classes.header}>
			<div className={classes.logo}>yeshtery</div>
			<div className={classes.slider}>
				<img
					src='https://img.icons8.com/ios-glyphs/30/000000/chevron-left.png'
					alt='chevron-left'
					className={classes.chevron}
				/>
				<div>
					Valentine Day offer <b>Shop Now</b>
				</div>
				<img
					src='https://img.icons8.com/ios-glyphs/30/000000/chevron-right.png'
					alt='chevron-right'
					className={classes.chevron}
				/>
			</div>
			<nav className={classes.nav}>
				<ul>
					<li>
						<NavLink to='/' activeClassName={classes.active}>
							<i className='fas fa-phone'></i> Contact us
						</NavLink>
					</li>
					<li>
						<NavLink to='/' activeClassName={classes.active}>
							<i className='fas fa-cart-plus'></i> Track Order
						</NavLink>
					</li>
					<li>
						<NavLink to='/' activeClassName={classes.active}>
							<i className='fas fa-map-marker-alt'></i> Find a store
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default NavigationYellow
