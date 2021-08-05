import React from 'react'
import NavigationBlack from './Navigations/NavigationBlack'
import NavigationBottomWhite from './Navigations/NavigationBottomWhite'
import NavigationTopWhite from './Navigations/NavigationTopWhite'
import NavigationYellow from './Navigations/NavigationYellow'

const Header = () => {
	return (
		<div>
			<NavigationYellow />
			<NavigationTopWhite />
			<NavigationBlack />
			<NavigationBottomWhite />
		</div>
	)
}

export default Header
