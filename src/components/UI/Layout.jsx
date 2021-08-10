import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import classes from './Layout.module.css'

const Layout = props => {
	return (
		<div className={classes.layout}>
			<Header state={props.state} />
			{props.children}
			<Footer />
		</div>
	)
}

export default Layout
