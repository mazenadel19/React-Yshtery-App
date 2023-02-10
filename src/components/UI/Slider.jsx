import React from 'react'
import classes from './Slider.module.scss'

const Slider = props => {
	return <div className={classes.slider}>{props.children}</div>
}

export default Slider
