import React, { Component } from 'react'
import NavigationBlack from './Navigations/NavigationBlack'
import NavigationBottomWhite from './Navigations/NavigationBottomWhite'
import NavigationTopWhite from './Navigations/NavigationTopWhite'
import NavigationYellow from './Navigations/NavigationYellow'

export default class Header extends Component {
	render() {
		return (
			<>
				<NavigationYellow />
				<NavigationTopWhite
					showTheModal={this.props.showTheModal}
					numberOfCartItems={this.props.numberOfCartItems}
				/>
				<NavigationBlack />
				<NavigationBottomWhite />
			</>
		)
	}
}
