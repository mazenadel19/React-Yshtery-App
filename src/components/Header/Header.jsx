import React from 'react'
import NavigationBlack from './Navigations/NavigationBlack'
import NavigationBottomWhite from './Navigations/NavigationBottomWhite'
import NavigationTopWhite from './Navigations/NavigationTopWhite'
import NavigationYellow from './Navigations/NavigationYellow'

const Header = props => {
	return (
		<div>
			<NavigationYellow />
			<NavigationTopWhite showTheModal={props.showTheModal} />
			<NavigationBlack />
			<NavigationBottomWhite />
		</div>
	)
}

export default Header
