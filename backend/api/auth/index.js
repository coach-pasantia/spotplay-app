import AuthRoute from './Routes.js'
import AuthController from './Controller.js'
import Auth from '../../entity/Auth.js'
import { helpers } from '../../lib/helpers.js'
import { response } from '../../response/response.js'
import { HttpCode } from '../../response/httpcode.js'
import { config } from '../../config/defaults.js'
import { DataMongo } from '../../store/DataMongo.js'

export const authModule = (expressRoute) => {
  const authService = new DataMongo()
  const authController = new AuthController(authService, Auth, helpers.comparePassword, helpers.generateToken, config.table)
  const authRoute = new AuthRoute(expressRoute, authController, response, HttpCode)
  return authRoute._router
}
