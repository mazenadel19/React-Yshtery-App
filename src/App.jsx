import React, { Component, Suspense } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Layout from './components/UI/Layout'
import '@fortawesome/fontawesome-free/css/all.min.css'
import RouteProvider from './router/RouteProvider'



export default class App extends Component {
  state = {
    items: [],
    totalAmount: 0,
    numberOfCartItems: 0,
    currentProductName: 'Black T-Shirt'
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
      ...prevState,
      items: updatedItems,
      totalAmount: updatedTotalAmount,
      numberOfCartItems: updatedNumberOfCartItems,
    }))
  }

  currentProduct = product => {
    this.setState(prev => ({ ...prev, currentProductName: product?.name || '' }))
  }

  render() {
    return (
      <Layout state={this.state} currentProduct={this.currentProduct}>
        <RouteProvider addItemToCartHandler={this.addItemToCartHandler} currentProduct={this.currentProduct} />
      </Layout>
    )
  }
}
