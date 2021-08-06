import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Footer.module.css'
import Input from '../UI/Input';

const Footer = () => {
	return (
		<section className={classes.footer}>
			<section className={classes.footerTop}>
				<section className={classes.footerTopLeft}>
					<h1>yeshtery</h1>
					<section className={classes.wrapper}>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
							Dolores impedit laborum, labore maxime eum modi?
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
							nesciunt aperiam labore maxime eum modi?
						</p>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
					</section>
				</section>
				<div className={classes.vr}></div>
				<section className={classes.footerTopRight}>
					<p>Subscribe to our news letter</p>
					<Input placeholder='enter your mail' width='100%'/>
					<section className={classes.info}>
						<section>
							<ul>
								<li>
									<Link to='/'>About Us</Link>
								</li>
								<li>
									<Link to='/'>Contact Us</Link>
								</li>
								<li>
									<Link to='/'>Track Order</Link>
								</li>
								<li>
									<Link to='/'>Terms & Conditions</Link>
								</li>
								<li>
									<Link to='/'>Privacy Policy</Link>
								</li>
								<li>
									<Link to='/'>Selling with Us</Link>
								</li>
								<li>
									<Link to='/'>Shipping & Return</Link>
								</li>
							</ul>
						</section>
						<section>
							<ul>
								<li>
									<Link to='/'>
										<img src='/images/facebook.jpg' alt='facebook' />
										<p> /YESHTERY</p>
									</Link>
								</li>
								<li>
									<Link to='/'>
										<img src='/images/linkedin.png' alt='linkedin' />
										<p> /YESHTERY</p>
									</Link>
								</li>
								<li>
									<Link to='/'>
										<img src='/images/instagram.png' alt='instagram' />
										<p> /YESHTERY</p>
									</Link>
								</li>
								<li>
									<Link to='/'>
										<img src='/images/twitter.png' alt='twitter' />
										<p> /YESHTERY</p>
									</Link>
								</li>
							</ul>
						</section>
					</section>
				</section>
			</section>
			<hr className={classes.hr} />
			<section className={classes.footerBottom}>
				<small>&copy; 2021 yeshtery. all rights reserved</small>
				<div>
					<img src='/images/mastercard.png' alt='mastercard' />
					<img src='/images/visa.png' alt='visa' />
				</div>
				<p>
					<small>powered by</small> nasnav
				</p>
			</section>
		</section>
	)
}

export default Footer
