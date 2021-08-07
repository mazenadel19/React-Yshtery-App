import React from 'react'
import Products from '../services/Products'
import classes from './main.module.css'
import blackShirt from '../images/blackShirt.jpg'
import blueShirt from '../images/blueShirt.jpg'
import purpleShirt from '../images/purpleShirt.png'
import redShirt from '../images/redShirt.jpeg'
import whiteShirt from '../images/whiteShirt.jpg'

const DUMMY_Products = [
	{
		id: 't1',
		name: 'Black tshirt',
		rating: 4,
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
		rating: 3,
		price: 12.99,
		image: purpleShirt,
	},
	{
		id: 't4',
		name: 'Red Tshirt',
		rating: 2,
		price: 18.99,
		image: redShirt,
	},
	{
		id: 't5',
		name: 'White Tshirt',
		rating: 1,
		price: 18.99,
		image: whiteShirt,
	},
]

const Men = () => {
	return (
		<main className={classes.main}>
			<Products DUMMY_Products={DUMMY_Products} />
		</main>
	)
}

export default Men
