import React from 'react'
import Modal from '../UI/Modal'
import classes from './Cart.module.css'

const Cart = props => {
	const cartItems = (
		<ul className={classes['cart-items']}>
			{[{ id: 't1', name: 'tshirt red', amount: 2, price: 12.99 }].map(item => (
				<li key={item.id}>{item.name}</li>
			))}
		</ul>
	)

	return (

		<Modal hideTheModal={props.hideTheModal}>
			{cartItems}
			<div className={classes.total}>
				<span>Total Amount</span>
				<span>35.62</span>
			</div>
			<div className={classes.actions}>
				<button className={classes['button--alt']} onClick={props.hideTheModal}>
					Close
				</button>
				<button className={classes.button}>Order</button>
			</div>
		</Modal>
	)
}

export default Cart
