import React from 'react'
import Products from '../components/Products'
import { DUMMY_Products } from '../services'
import classes from './main.module.scss'



const Men = props => {
	return (
		<main className={classes.main}>
			<Products
				DUMMY_Products={DUMMY_Products}
				addItemToCartHandler={props.addItemToCartHandler}
			/>
		</main>
	)
}

export default Men
