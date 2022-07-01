import Server from './Server.js'
import { config } from '../config/defaults.js'

function main (api) {
  const server = new Server(api)
  server.start()
}

main(config.api)
