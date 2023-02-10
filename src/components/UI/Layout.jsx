import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import classes from './Layout.module.scss'

const Layout = props => {
	return (
		<div className={classes.layout}>
			<Header state={props.state} currentProduct={props.currentProduct}/>
			{props.children}
			<Footer />
		</div>
	)
}

export default Layout
