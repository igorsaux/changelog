import React from 'react'
import * as CDN from '../cdn'
import * as OnyxBay from '../servers/OnyxBay'

function App () {
  const cdn = new CDN.Vercel()
  const server = new OnyxBay.Server(cdn)
  const Changelog = server.Changelog()

  return <Changelog />
}

export default App
