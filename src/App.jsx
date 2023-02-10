import React, { Component, Suspense } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Layout from './components/UI/Layout'
import '@fortawesome/fontawesome-free/css/all.min.css'


const Bestsellers = React.lazy(() => import('./pages/Bestsellers'))
const Kids = React.lazy(() => import('./pages/Kids'))
const Men = React.lazy(() => import('./pages/Men'))
const Newarrivals = React.lazy(() => import('./pages/Newarrivals'))
const NotFound = React.lazy(() => import('./pages/NotFound'))
const Offers = React.lazy(() => import('./pages/Offers'))
const Unisex = React.lazy(() => import('./pages/Unisex'))
const Women = React.lazy(() => import('./pages/Women'))


const loading = (
  <div>
    <p>L0AD!NG...</p>
  </div>
)

export default class App extends Component {
  state = {
    items: [],
    totalAmount: 0,
    numberOfCartItems: 0,
  }

  addItemToCartHandler = item => {
    const existingCartItemIndex = this.state.items.findIndex(
      product => product.id === item.id,
    )
    const existingCartItem = this.state.items[existingCartItemIndex]

    let updatedItems
    if (existingCartItem) {
      let updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + item.amount,
      }
      updatedItems = [...this.state.items]
      // updatedItem[existingCartItemIndex] = updatedItem
      updatedItems[existingCartItemIndex] = updatedItem
    } else {
      updatedItems = this.state.items.concat(item)
    }

    const updatedTotalAmount = this.state.totalAmount + item.price * item.amount
    const updatedNumberOfCartItems = updatedItems.length

    this.setState(prevState => ({
      items: updatedItems,
      totalAmount: updatedTotalAmount,
      numberOfCartItems: updatedNumberOfCartItems,
    }))
  }

  render() {
    return (
      <Layout state={this.state}>
        <Suspense fallback={loading}>
          <Switch>
            <Route path='/' exact>
              <Redirect to='/men' />
            </Route>
            <Route path='/men'>
              <Men addItemToCartHandler={this.addItemToCartHandler} />
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
        </Suspense>
      </Layout>
    )
  }
}
