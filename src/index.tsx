import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import App from './components/App'
import reportWebVitals from './reportWebVitals'

console.log(`
    ________                __  _      ____
   / ____/ /_  ____ _____  / /_(_)____/ __ \\____  __  ___  __
  / /   / __ \\/ __ \`/ __ \\/ __/ / ___/ / / / __ \\/ / / / |/_/
 / /___/ / / / /_/ / /_/ / /_/ / /__/ /_/ / / / / /_/ />  <  
 \\____/_/ /_/\\__,_/\\____/\\__/_/\\___/\\____/_/ /_/\\__, /_/|_|  
                                               /____/        
`)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
