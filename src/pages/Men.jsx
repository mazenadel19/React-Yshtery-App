import React from 'react'
import blackShirt from '../images/blackShirt.png'
import blueShirt from '../images/blueShirt.png'
import purpleShirt from '../images/purpleShirt.png'
import redShirt from '../images/redShirt.png'
import whiteShirt from '../images/whiteShirt.png'
import Products from '../services/Products'
import classes from './main.module.css'

const DUMMY_Products = [
	{
		id: 't1',
		name: 'Black tshirt',
		rating: 4.5,
		price: 22.99,
		image: blackShirt,
	},
	{
		id: 't2',
		name: 'Blue Tshirt',
		rating: 5,
		price: 16.5,
		image: blueShirt,
	},
	{
		id: 't3',
		name: 'Purple Tshirt',
		rating: 3.5,
		price: 12.99,
		image: purpleShirt,
	},
	{
		id: 't4',
		name: 'Red Tshirt',
		rating: 2.5,
		price: 18.99,
		image: redShirt,
	},
	{
		id: 't5',
		name: 'White Tshirt',
		rating: 1.5,
		price: 18.99,
		image: whiteShirt,
	},
]

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
