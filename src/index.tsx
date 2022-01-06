import App from './components/App'
import './styles/index.css'
import { render } from 'preact'

console.log(
  '%cOnyx',
  `
  color: #F34160;
  font-weight: bold;
  font-size: 12ch;
  text-shadow: 0px 1px black, 0 2px black, 0 3px black, 0 4px black;
  font-style: italic;
`
)

render(<App />, document.body)
