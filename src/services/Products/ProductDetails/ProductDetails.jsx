import React from 'react'
import classes from './ProductDetails.module.css'

const ProductDetails = props => {
	console.log(props.selectedProduct)

	return <div className={classes.productDetails}></div>
}

export default ProductDetails
