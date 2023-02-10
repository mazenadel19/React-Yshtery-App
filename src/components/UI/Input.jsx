import React from 'react'
import classes from './Input.module.scss'

const Input = props => {
	return (
		<div className={classes.input}>
			<input placeholder={props.placeholder} style={{ width: props.width }} />
		</div>
	)
}

export default Input
