import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import swaggerUI from 'swagger-ui-express'
import YAML from 'yamljs'

// configuracion de paths
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
// importacion de modulos
import { userModule } from './user/index.js'
import { songMudule } from './song/index.js'
import { authModule } from './auth/index.js'

// esta clase crea el servidor
class Server {
  constructor (config) {
    this._app = express() // almacena la instancia de express
    this._port = config.port // almacena el puerto del servidor
    this._hostname = config.hostname // almacena el hostname del servidor
    this._name = config.name // almacena el nombre del servidor
    this._dirname = dirname(fileURLToPath(import.meta.url)) // almacena el directorio del servidor
    this._swaggerFile = YAML.load(join(dirname(fileURLToPath(import.meta.url)), '../docs/swagger.yaml')) // almacena el archivo swagger
    this.setMiddlewares()
    this.setRoutes()
  }

  setMiddlewares () {
    this._app.use(express.json())
    this._app.use(express.urlencoded({ extended: true }))
    this._app.use(cors())
    this._app.use(morgan('dev'))
  }

  setRoutes () {
    this._app.use('/', (req, res) => {
      res.send('Hello World')
    })
    this._app.use('/api/v1/song', songMudule())
    this._app.use('/api/v1/user', userModule(express.Router))
    this._app.use('/api/v1/auth', authModule(express.Router))
    this._app.use('/api/v1/docs', swaggerUI.serve, swaggerUI.setup(this._swaggerFile))
  }

  // este metodo inicia el servidor
  start () {
    this._app.set('hostname', this._hostname)
    this._app.listen(this._port, () => {
      console.log(`${this._name} is running on http://${this._hostname}:${this._port}`)
    })
  }
}
export default Server
