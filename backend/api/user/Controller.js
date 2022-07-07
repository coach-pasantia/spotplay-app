class UserController {
  constructor (serviceUser, user, hashPassword, table) {
    this._service = serviceUser
    this._entity = user
    this._hashPassword = hashPassword
    this._table = table
  }

  async createNewUser (user) {
    try {
      const newUser = new this._entity(user)
      newUser.encryptPassword(user.password, this._hashPassword)
      const response = await this._service.save(this._table.user, newUser)
      return response
    } catch (error) {
      console.log(error)
      return new Error('create new user failed')
    }
  }
}

export default UserController
