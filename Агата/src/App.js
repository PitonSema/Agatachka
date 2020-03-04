import React from 'react'

import {
  Home,
  Admin,
  CorporateHolidays,
  PrivateHolidays,
  Artists,
  Portfolio
} from './pages'
  import { createBrowserHistory } from 'history'

import { Router, Switch, Route } from 'react-router-dom'

import './App.scss'

const appHistory = createBrowserHistory()

export default () => {
  return (
    <Router history={appHistory}>
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={Admin} path='/admin'/>
        <Route component={CorporateHolidays} path='/corporate-holidays'/>
        <Route component={PrivateHolidays} path='/private-holidays'/>Artists
        <Route component={Artists} path='/artists'/>Portfolio
        <Route component={Portfolio} path='/portfolio'/>
      </Switch>
    </Router>
  )
}
