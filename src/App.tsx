import React from 'react'
import * as OnyxBay from './servers/OnyxBay'

function App () {
  const server = new OnyxBay.Server()

  return <server.Changelog />
}

export default App
