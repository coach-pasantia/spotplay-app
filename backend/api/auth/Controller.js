export default class AuthController {
  constructor (authServices, entity, comparePassword, generateToken, table) {
    this._services = authServices
    this._entity = entity
    this._comparePassword = comparePassword
    this._generateToken = generateToken
    this._table = table
  }

  async authenticationUser (user) {
    try {
      let result
      if (user.username) {
        result = await this.getUserByAttribute('_username', user.username)
      } else if (user.email) {
        result = await this.getUserByAttribute('_email', user.email)
      } else {
        return this.authObject(false, {})
      }
      if (result !== null) {
        const resultComparePassword = await this._comparePassword(user.password, result._password)
        if (resultComparePassword) {
          return this.authObject(true, result)
        } else {
          return this.authObject(false, {})
        }
      } else {
        return this.authObject(false, {})
      }
    } catch (error) {
      return new Error('error')
    }
  }

  async getUserByAttribute (attribute, value) {
    return await this._services.findByAttribute(this._table.user, attribute, value)
  }

  authObject (state, user) {
    if (state) {
      const tokenUser = this._generateToken(user._id)
      return new this._entity({
        state: true,
        username: user._username,
        email: user._email,
        token: tokenUser,
        message: 'Login successful'
      })
    } else {
      return new this._entity({
        state: false,
        username: '',
        email: '',
        token: '',
        message: 'Sus credenciales son incorrectos'
      })
    }
  }
}
