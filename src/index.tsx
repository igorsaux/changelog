import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { HashRouter } from 'react-router-dom'
import './styles/index.css'

console.log('%cOnyx', `
  color: #F34160;
  font-weight: bold;
  font-size: 12ch;
  text-shadow: 0px 1px black, 0 2px black, 0 3px black, 0 4px black;
  font-style: italic;
`)

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
