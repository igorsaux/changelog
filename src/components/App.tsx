import { createContext } from 'preact'
import Router, { CustomHistory } from 'preact-router'
import { GameServer } from '../abstractions/GameServer'
import { RealGitHubApi } from '../api/RealGitHubApi'
import { GitHubRaw } from '../cdn/GitHubRaw'
import { Servers } from '../servers/OnyxBay'
import { ServersList } from './ServersList'
import { createHashHistory } from 'history'

export const AppContext = createContext({
  cdn: new GitHubRaw(),
  api: new RealGitHubApi()
})

const SERVERS: { [key: string]: GameServer } = {
  chaotic: new Servers.ChaoticOnyx(),
  eos: new Servers.Eos()
}

function ServersSelection() {
  const keys = Object.keys(SERVERS)

  return (
    <ServersList>
      {keys.map(id => {
        return <ServersList.Entry id={id} server={SERVERS[id]} />
      })}
    </ServersList>
  )
}

function App() {
  const keys = Object.keys(SERVERS)

  return (
    <Router history={createHashHistory() as unknown as CustomHistory}>
      {keys.map(id => {
        const ServerComponent = SERVERS[id].Changelog()

        return <ServerComponent path={`/${id}`} />
      })}
      <ServersSelection default />
    </Router>
  )
}

export default App
