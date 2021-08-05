import React from 'react'
import Footer from './Footer'
import Header from './Header/Header'
import classes from './Layout.module.css'

const Layout = props => {
	return (
		<div className={classes.layout}>
			<Header />
			{props.children}
			<Footer />
		</div>
	)
}

export default Layout
