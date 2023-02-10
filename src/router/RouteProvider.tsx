import React, { Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'


const Bestsellers = React.lazy(() => import('../pages/Bestsellers'))
const Kids = React.lazy(() => import('../pages/Kids'))
const Men = React.lazy(() => import('../pages/Men'))
const Newarrivals = React.lazy(() => import('../pages/Newarrivals'))
const NotFound = React.lazy(() => import('../pages/NotFound'))
const Offers = React.lazy(() => import('../pages/Offers'))
const Unisex = React.lazy(() => import('../pages/Unisex'))
const Women = React.lazy(() => import('../pages/Women'))

const loading = (
  <div>
    <p>LOADING...</p>
  </div>
)

const RouteProvider = ({ addItemToCartHandler }) => {

  return (
    <Suspense fallback={loading}>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/men' />
        </Route>
        <Route path='/men'>
          <Men addItemToCartHandler={addItemToCartHandler} />
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
  )
}

export default RouteProvider