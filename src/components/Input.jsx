import React from 'react'
import classes from './Input.module.css'

const Input = props => {
	return (
		<form method='post'>
			<input
				type='search'
				name=''
				className={classes.search}
				placeholder={props.placeholder}
				style={{ width: props.width }}
			/>
		</form>
	)
}

export default Input
