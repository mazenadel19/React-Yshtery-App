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
		name: 'Black T-Shirt',
		rating: 4.5,
		price: 22.99,
		image: blackShirt,
		sex: 'Men',
		rates: 12,
		discount: 20,
	},
	{
		id: 't2',
		name: 'Blue T-Shirt',
		rating: 5,
		price: 16.5,
		image: blueShirt,
		sex: 'Men',
		rates: 14,
		discount: 10,
	},
	{
		id: 't3',
		name: 'Purple T-Shirt',
		rating: 3.5,
		price: 12.99,
		image: purpleShirt,
		sex: 'Unisex',
		rates: 8,
		discount: 20,
	},
	{
		id: 't4',
		name: 'Red T-Shirt',
		rating: 2.5,
		price: 18.99,
		image: redShirt,
		sex: 'Men',
		rates: 2,
		discount: 15,
	},
	{
		id: 't5',
		name: 'White T-Shirt',
		rating: 1.5,
		price: 18.99,
		image: whiteShirt,
		sex: 'Men',
		rates: 6,
		discount: 20,
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
