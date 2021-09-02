import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { HashRouter } from 'react-router-dom'
import './styles/index.css'

console.log(`
 ..|''||                             
.|'    ||  .. ...   .... ... ... ... 
||      ||  ||  ||   '|.  |   '|..'  
'|.     ||  ||  ||    '|.|     .|.   
 ''|...|'  .||. ||.    '|    .|  ||. 
                    .. |             
                     ''              
`)

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
