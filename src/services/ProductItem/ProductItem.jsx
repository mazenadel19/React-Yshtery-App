import React, { Component } from 'react'
import Card from '../../components/UI/Card'
import classes from './ProductItem.module.css'
import ProductItemForm from './ProductItemForm'

export default class ProductItem extends Component {

	AddToCartHandler = amount => {
		this.props.addItemToCartHandler({
			id: this.props.id,
			name: this.props.name,
			price: this.props.price,
			amount: amount,
		})
	}

	render() {
		const price = `$${this.props.price.toFixed(2)}`
		return (
			<li className={classes.product}>
				<Card>
						<ProductItemForm
							id={this.props.id}
							onAddToCart={this.AddToCartHandler}
						/>
					<div>
						<h3>{this.props.name}</h3>
						<div className={classes.description}>{this.props.description}</div>
						<div className={classes.price}>{price}</div>
						<img src={this.props.image} alt='' height='500px' width='500px' />
					</div>
					<div>
					</div>
				</Card>
			</li>
		)
	}
}
