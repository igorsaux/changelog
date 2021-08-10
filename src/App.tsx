
import { Vercel } from './cdn/Vercel'
import * as OnyxBay from './servers/OnyxBay'

function App () {
  const cdn = new Vercel()
  const server = new OnyxBay.Server(cdn)

  return server.Changelog()
}

export default App
