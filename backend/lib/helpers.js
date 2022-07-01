import bcrypt from 'bcrypt'

export const helpers = {
  encryptPassword: (password) => {
    return bcrypt.hashSync(password, 10)
  },
  comparePassword: (password, hashPassword) => {
    return bcrypt.compareSync(password, hashPassword)
  }
}
