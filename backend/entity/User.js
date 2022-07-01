export default class User {
  constructor (user) {
    this._id = null
    this._username = user.username
    this._email = user.email
    this._password = user.password
  }

  encryptPassword (password, hashPasssword) {
    this._password = hashPasssword(password)
  }
}
