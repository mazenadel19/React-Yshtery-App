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
				<NavigationTopWhite state={this.props.state} removeItem={this.props.removeItem} />
				<NavigationBlack currentProduct={this.props.currentProduct} />
				<NavigationBottomWhite state={this.props.state} />
			</>
		)
	}
}

