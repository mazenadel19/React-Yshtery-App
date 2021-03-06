import React, { Component } from 'react'
import Slider from '../components/UI/Slider'
import classes from './Products.module.css'
import ProductDetails from './Products/ProductDetails/ProductDetails'
import ProductItem from './Products/ProductItem/ProductItem'

export default class Products extends Component {
	state = {
		selectedProduct: {
			id: 't1',
			image: '/static/media/blackShirt.940ce386.png',
			name: 'Black T-Shirt',
			price: 22.99,
			rating: 4.5,
			sex: 'Men',
			rates: 12,
			discount: 20,
		},
	}

	productSelectionHandler = selectedProduct => {
		this.setState({ selectedProduct })
	}

	// API CALL IN MEN PAGE AND DATA IS PASSED BY PROPS
	productsList = this.props.DUMMY_Products.map(product => (
		<ProductItem
			id={product.id}
			key={product.id}
			name={product.name}
			rating={product.rating}
			price={product.price}
			image={product.image}
			rates={product.rates}
			discount={product.discount}
			sex={product.sex}
			productSelectionHandler={this.productSelectionHandler}
		/>
	))

	render() {
		return (
			<section className={classes.products}>
				<ProductDetails
					selectedProduct={this.state.selectedProduct}
					addItemToCartHandler={this.props.addItemToCartHandler}
				/>
				<h1>Similar Products</h1>
				<h2>you may like these products also</h2>
				<Slider>
					<ul>{this.productsList}</ul>
				</Slider>
			</section>
		)
	}
}
