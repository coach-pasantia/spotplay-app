import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  _username: { type: String, required: true },
  _email: { type: String, required: true },
  _password: { type: String, required: true }
})

const SongSchema = new mongoose.Schema({
  _title: { type: String, required: true },
  _artist: { type: String, required: true },
  _album: { type: String, required: true }
})

const AuthSchema = new mongoose.Schema({
  _username: { type: String, required: true },
  _password: { type: String, required: true }
})

const Users = mongoose.model('User', UserSchema)
const Songs = mongoose.model('Song', SongSchema)
const Auths = mongoose.model('Auth', AuthSchema)

export const models = {
  Users,
  Songs,
  Auths
}
