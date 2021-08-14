import React from 'react'
import * as CDN from '../cdn'
import { Servers } from '../servers/OnyxBay'

const SERVERS = [
  new Servers.ChaoticOnyx(),
  new Servers.Eos()
]

function App () {
  const cdn = new CDN.Vercel()
  const Changelog = SERVERS[0].Changelog(cdn)

  return <Changelog />
}

export default App
