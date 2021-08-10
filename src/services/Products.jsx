import React, { Component } from 'react'
import Slider from '../components/UI/Slider'
import classes from './Products.module.css'
import ProductDetails from './Products/ProductDetails/ProductDetails'
import ProductItem from './Products/ProductItem/ProductItem'

export default class Products extends Component {
	state = {
		selectedProduct: {},
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
			productSelectionHandler={this.productSelectionHandler}
		/>
	))

	render() {
		return (
			<section className={classes.products}>
				<Slider>
					<ProductDetails selectedProduct={this.state.selectedProduct} />
					<ul>{this.productsList}</ul>
				</Slider>
			</section>
		)
	}
}
