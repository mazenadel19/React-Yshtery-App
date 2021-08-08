import React from 'react'
import ProductItem from './ProductItem/ProductItem'
import classes from './Products.module.css'

const Product = props => {
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
			<ul>{productsList}</ul>
		</section>
	)
}

export default Product
