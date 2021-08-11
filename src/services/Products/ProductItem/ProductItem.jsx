import React, { Component } from 'react'
import Rating from '../../../components/Rating/Rating'
import Badge from '../../../components/UI/Badge'
import Card from '../../../components/UI/Card'
import classes from './ProductItem.module.css'

export default class ProductItem extends Component {
	productSelectionHandler = () => {
		this.props.productSelectionHandler({
			id: this.props.id,
			name: this.props.name,
			rating: this.props.rating,
			price: this.props.price,
			image: this.props.image,
			discount: this.props.discount,
			rates: this.props.rates,
			sex: this.props.sex,
		})
	}

	render() {
		const price = `${this.props.price.toFixed(2)} L.E.`

		const price2 = `${(
			this.props.price +
			(this.props.price * this.props.discount) / 100
		).toFixed(2)} L.E.`

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
							<div className={classes.price}>{price}</div>
							<img src='/images/logo.png' alt='' width='50px' />
						</section>
						<div className={classes.discount}>
							<div className={classes.price2}>{price2}</div>
							<Badge>{this.props.discount}% off</Badge>
						</div>
						<div className={classes.description}>
							<Rating value={this.props.rating} color='#db7f07' />
							<span>{this.props.rating} of 5</span>
						</div>
					</div>
				</Card>
			</li>
		)
	}
}
