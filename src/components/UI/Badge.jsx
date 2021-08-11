import React from 'react'
import classes from './Badge.module.css'

const Badge = props => {
	return (
		<span
			className={classes.badge}
			style={{ borderRadius: props.borderRadius }}>
			{props.children}
		</span>
	)
}

export default Badge
