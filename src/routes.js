import React from 'react'
import { Route, IndexRoute } from 'react-router'
import { App, HomePage } from 'components'

const routes = (
  <Route path="/" component={App}>
    <Route path="*" component={HomePage}/>
  </Route>
)

export default routes
