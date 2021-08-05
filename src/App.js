import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Layout from './components/Layout'
import Bestsellers from './pages/Bestsellers'
import Kids from './pages/Kids'
import Men from './pages/Men'
import Newarrivals from './pages/Newarrivals'
import NotFound from './pages/NotFound'
import Offers from './pages/Offers'
import Unisex from './pages/Unisex'
import Women from './pages/Women'

function App() {
	return (
		<Layout>
			<Switch>
				<Route path='/' exact>
					<Redirect to='/men' />
				</Route>
				<Route path='/men'>
					<Men />
				</Route>
				<Route path='/women'>
					<Women />
				</Route>
				<Route path='/unisex'>
					<Unisex />
				</Route>
				<Route path='/kids'>
					<Kids />
				</Route>
				<Route path='/bestsellers'>
					<Bestsellers />
				</Route>
				<Route path='/newarrivals'>
					<Newarrivals />
				</Route>
				<Route path='/offers'>
					<Offers />
				</Route>
				<Route path='*'>
					<NotFound />
				</Route>
			</Switch>
		</Layout>
	)
}

export default App
