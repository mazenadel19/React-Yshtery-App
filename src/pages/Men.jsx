import React from 'react'
import Products from '../components/Products'
import classes from './main.module.scss'

const Men = props => {
	return (
		<main className={classes.main}>
			<Products addItemToCartHandler={props.addItemToCartHandler} currentProduct={props.currentProduct} />
		</main>
	)
}

export default Men
