import React from 'react'
import {render} from 'react-dom'
import {injectGlobal} from 'styled-components'
import {Provider} from 'react-redux'
import State from 'state'
import Routes from 'app/routes'

injectGlobal`
  html {
    font-size: 1.1em;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: helvetica;
    font-weight: 100;
  }
`

const App = () => (
  <Provider store={State}>
    <Routes />
  </Provider>
)

render(<App />, document.getElementById('app'))
