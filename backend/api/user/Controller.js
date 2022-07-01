// los controller se encargar de realizar la logica del negocio

class UserController {
  constructor (serviceUser, user, hashPassword) {
    this._service = serviceUser
    this._entity = user
    this._hashPassword = hashPassword
  }

  createNewUser (user) {
    console.log(user)
    if (user.username && user.email && user.password) {
      const newUser = new this._entity(user)
      console.log(newUser)
      newUser.encryptPassword(user.password, this._hashPassword)
      console.log(newUser)
      const response = this._service.save('user', newUser)
      return response
    } else {
      throw new Error('Missing parameters')
    }
  }

  getAllSong () {
    const response = this._service.all('song')
    return response
  }

  updateSong (song) {
    console.log(song)
    return 'updated a song'
  }

  deleteSong (id) {
    console.log(id)
    return 'deleted a song'
  }
}

export default UserController
