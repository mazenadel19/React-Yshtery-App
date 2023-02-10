import React, { Component } from 'react'
import classes from './Cart.module.scss'
import cartIcon from "/images/cartIcon.svg"

export default class Cart extends Component {
	state = {
		cartVisiblity: false,
	}

	cartHandler = () => {
		this.setState({ cartVisiblity: !this.state.cartVisiblity })
	}


	render() {
		return (
			<div className={classes.cart}>
				<div onClick={this.cartHandler} className={classes.iconWrapper}>
					<img src={cartIcon} alt="cartIcon" width={20} />
					<span>Cart</span>
				</div>
				{this.state.cartVisiblity && (
					<div className={classes['dropdown-content']}>
						<div className={classes.cross}>
							<i className="fa fa-times" onClick={this.cartHandler}></i>
						</div>


						{this.props.items.length > 0 ? (
							<>
								<p className={`${classes.purple_text} ${classes.text} ${classes.big_text}`}>
									My Cart
								</p>
								<p>
									<strong>Cart Summary</strong>
								</p>
								<ul className={classes['cart-items']}>
									{this.props.items.map(item => (
										<li key={item.id}>
											<div className={classes.img_wrapper}>
												<img src={item.image} alt="pic" />
											</div>
											<div>
												<strong>{item.name}</strong>
												<p>quantity : {item.amount}</p>
												<div>
													<span className={classes.purple_text}><strong>{item.price}</strong> LE</span>
													<button onClick={() => this.props.removeItem(item)}>Remove</button>
												</div>
											</div>
										</li>
									))}
								</ul>
								<div className={classes.text}>
									<span className={classes.medium_text}>Total:&nbsp;</span>
									<span className={classes.medium_text}>{this.props.totalAmount.toFixed(2)} LE</span>
								</div>

								<div>
									<button className={`${classes.actionButtons}`}>Review Cart</button>
									<button className={`${classes.purple_actionButton} ${classes.actionButtons}`} >Complete Checkout</button>
								</div>
							</>
						) : (
							'nothing has been added to cart yet '
						)}
					</div>
				)}
			</div>
		)
	}
}
