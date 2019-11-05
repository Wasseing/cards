import { App, HomePage } from './components'
import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'


const root = document.getElementById('app')

const renderApp = () => (
  <AppContainer>
    <App>
      <HomePage />
    </App>
  </AppContainer>
)

render(renderApp(), root)

if (module.hot) {
  module.hot.accept('routes', () => {
    require('routes')
    render(renderApp(), root)
  })
}
