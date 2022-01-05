import React from 'react'
import { Route, Switch } from 'react-router'
import { GameServer } from '../abstractions/GameServer'
import { RealGitHubApi } from '../api/RealGitHubApi'
import { GitHubRaw } from '../cdn/GitHubRaw'
import { Servers } from '../servers/OnyxBay'
import { ServersList } from './ServersList'

export const AppContext = React.createContext({
  cdn: new GitHubRaw(),
  api: new RealGitHubApi()
})

const SERVERS: { [key: string]: GameServer } = {
  chaotic: new Servers.ChaoticOnyx(),
  eos: new Servers.Eos()
}

const ServersSelection = () => {
  const keys = Object.keys(SERVERS)

  return (
    <ServersList>
      {keys.map(id => {
        return <ServersList.Entry key={id} id={id} server={SERVERS[id]} />
      })}
    </ServersList>
  )
}

export const App = () => {
  const keys = Object.keys(SERVERS)

  return (
    <Switch>
      {keys.map(id => {
        const ServerComponent = SERVERS[id].Changelog()

        return (
          <Route key={id} path={`/${id}`}>
            <ServerComponent />
          </Route>
        )
      })}
      <Route>
        <ServersSelection />
      </Route>
    </Switch>
  )
}

export default App
