import React from 'react'
import {render} from 'react-dom'
import {injectGlobal} from 'styled-components'

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
  <div className="hello">
    <h1>testing</h1>
    <p>hello, world!</p>
  </div>
)

render(<App />, document.getElementById('app'))
