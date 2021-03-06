import React, { Component } from 'react'
import classes from './Cart.module.css'

export default class Cart extends Component {
	state = {
		cartVisiblity: false,
	}

	cartHandler = () => {
		this.setState({ cartVisiblity: !this.state.cartVisiblity })
	}

	render() {
		return (
			<div className={classes.dropdown} onClick={this.cartHandler}>
				<i className='fas fa-ship'></i> Cart
				{this.state.cartVisiblity && (
					<div className={classes['dropdown-content']}>
						{this.props.items.length > 0 ? (
							<ul className={classes['cart-items']}>
								{this.props.items.map(item => (
									<li key={item.id}>
										<span>{item.name}</span> <span>x{item.amount}</span>
									</li>
								))}
							</ul>
						) : (
							'nothing has been added to cart yet '
						)}
						<div className={classes.total}>
							<span>Total Amount</span>
							<span>{this.props.totalAmount.toFixed(2)}</span>
						</div>
					</div>
				)}
			</div>
		)
	}
}
