import React from 'react'
import classes from './Circle.module.css'
const Circle = props => {
	return <span className={classes.circle}>{props.children}</span>
}

export default Circle
