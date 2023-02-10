import React from 'react'
import Rating from '../../../components/Rating/Rating'
import Badge from '../../../components/UI/Badge'
import Circle from '../../../components/UI/Circle'
import ProductItemForm from '../ProductForm/ProductItemForm'
import classes from './ProductDetails.module.scss'

const ProductDetails = ({ selectedProduct, addItemToCartHandler }) => {
	const AddToCartHandler = amount => {
		addItemToCartHandler({
			...selectedProduct,
			amount: amount,
		})
	}

	const price = `${selectedProduct.price.toFixed(2)} L.E.`

	const price2 = `${(
		selectedProduct.price +
		(selectedProduct.price * selectedProduct.discount) / 100
	).toFixed(2)} L.E.`



	return (
		<div className={classes.productDetails}>
			<section className={classes.mainImage}>
				<img src={selectedProduct.image} alt={selectedProduct.name} />
			</section>
			<section className={classes.productInfo}>
				<img src='/images/logo.png' alt='' width='50px' />
				<div>{selectedProduct.name}</div>
				<div className={classes.sex}>{selectedProduct.sex}</div>
				<div className={classes.ratings}>
					<Rating value={selectedProduct.rating} color='#db7f07' />
					<strong>{selectedProduct.rating} of 5</strong>
					<span className={classes.rates}>{selectedProduct.rates} rates</span>
				</div>
				<div className={classes.pricing}>
					<div className={classes.priceNew}>{price}</div>
					<div className={classes.priceOld}>{price2}</div>
					<Badge borderRadius='2px'>{selectedProduct.discount}% off</Badge>
				</div>
				<hr />
				<p className={classes.title}>Size</p>
				<div className={classes.row}>
					<Circle>Small</Circle>
					<Circle>Medium</Circle>
					<Circle>Large</Circle>
					<Circle>XLarge</Circle>
					<Circle>XxLarge</Circle>
				</div>
				<hr />
				<p className={classes.title}>Color</p>
				<div className={classes.row}>
					<Circle>Black</Circle>
					<Circle>Red</Circle>
				</div>
				<ProductItemForm
					id={selectedProduct.id}
					onAddToCart={AddToCartHandler}
				/>
			</section>
		</div>
	)
}

export default ProductDetails
