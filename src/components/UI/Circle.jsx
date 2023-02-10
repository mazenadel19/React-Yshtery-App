import React from 'react'
import classes from './Circle.module.scss'
const Circle = props => {
	return <span className={classes.circle}>{props.children}</span>
}

export default Circle
