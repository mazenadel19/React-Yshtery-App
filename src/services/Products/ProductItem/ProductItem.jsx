import React, { Component } from 'react'
import Rating from '../../../components/Rating/Rating'
import Card from '../../../components/UI/Card'
import classes from './ProductItem.module.css'

export default class ProductItem extends Component {
	// AddToCartHandler = amount => {
	// 	this.props.addItemToCartHandler({
	// 		id: this.props.id,
	// 		name: this.props.name,
	// 		price: this.props.price,
	// 		amount: amount,
	// 	})
	// }

	productSelectionHandler = () => {
		this.props.productSelectionHandler({
			id: this.props.id,
			name: this.props.name,
			rating: this.props.rating,
			price: this.props.price,
			image: this.props.image,
		})
	}

	render() {
		const price = `$${this.props.price.toFixed(2)}`
		return (
			<li className={classes.product} onClick={this.productSelectionHandler}>
				<Card>
					<div
						className={classes.cardImg}
						style={{
							backgroundImage: `url(${this.props.image})`,
						}}></div>
					<div className={classes.content}>
						<h3>{this.props.name}</h3>
						<section>
							<div className={classes.price}>{price} L.E.</div>
							<img src='/images/logo.png' alt='' width='50px' />
						</section>
						<div className={classes.discount}>
							<div className={classes.price2}>{price} L.E.</div>
							<span className={classes.badge}>20% off</span>
						</div>
						<div className={classes.description}>
							<Rating value={this.props.rating} color='#db7f07' />
							<span>{this.props.rating} of 5</span>
						</div>
					</div>
					{/* <ProductItemForm
						id={this.props.id}
						onAddToCart={this.AddToCartHandler}
					/> */}
				</Card>
			</li>
		)
	}
}
