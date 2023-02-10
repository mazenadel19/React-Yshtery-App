import React, { Component } from 'react'
import Slider from '../../components/UI/Slider'
import classes from './Products.module.scss'
import ProductDetails from './ProductDetails/ProductDetails'
import ProductItem from './ProductItem/ProductItem'
import blackShirt from '../../images/blackShirt.png'

export default class Products extends Component {
	state = {
		selectedProduct: {
			id: 't1',
			image: blackShirt,
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
