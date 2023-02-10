import React from 'react'
import classes from './Input.module.scss'

const Input = props => {
	return (
		<div className={classes.input}>
			<input placeholder={props.placeholder} style={{ width: props.width }} type={props.type||'text'} />
		</div>
	)
}

export default Input
