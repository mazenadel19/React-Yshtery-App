import React from 'react'
import ProductItem from './ProductItem/ProductItem'
import classes from './Products.module.css'
import Slider from '../components/UI/Slider';

const Product = props => {
	// API CALL IN MEN PAGE AND DATA IS PASSED BY PROPS

	const productsList = props.DUMMY_Products.map(product => (
		<ProductItem
			id={product.id}
			key={product.id}
			name={product.name}
			rating={product.rating}
			price={product.price}
			image={product.image}
			addItemToCartHandler={props.addItemToCartHandler}
		/>
	))

	return (
		<section className={classes.products}>
			<Slider>
				<ul>{productsList}</ul>
			</Slider>
		</section>
	)
}

export default Product
