import React from 'react'
import Header from '../Header/Header'
import classes from './Layout.module.css'
import Footer from '../Footer/Footer';

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
