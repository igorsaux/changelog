import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import App from './components/App'
import reportWebVitals from './reportWebVitals'
import { HashRouter } from 'react-router-dom'

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

reportWebVitals()
