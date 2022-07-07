import mongoose from 'mongoose'
import { config } from '../config/defaults.js'
import { models } from './Schemas.js'

class DataMongo {
  constructor () {
    this.setConnection()
    this._models = models
  }

  async setConnection () {
    try {
      const db = await mongoose.connect(config.mongo.uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
      console.log(`MongoDB connected: ${db.connection.host}`)
      return db
    } catch (error) {
      console.log(error)
    }
  }

  async save (model, data) {
    try {
      const modelInstance = this._models[model](data)
      const saved = await modelInstance.save()
      if (Object.keys(saved).length > 0) {
        return `create new item of ${model} successfully`
      }
      return `create new item of ${model} failed`
    } catch (error) {
      console.log(error)
      return `create new item of ${model} failed`
    }
  }

  async all (model) {
    try {
      const all = await this._models[model].find()
      if (Object.keys(all).length > 0) {
        return all
      }
      return `no item of ${model}`
    } catch (error) {
      console.log(error)
      return `no item of ${model}`
    }
  }

  async findById (model, id) {
    try {
      const findById = await this._models[model].findById(id)
      if (findById) {
        return findById
      }
      return `no item of ${model}`
    } catch (error) {
      console.log(error)
      return `no item of ${model}`
    }
  }

  async findByAttribute (model, attribute, value) {
    try {
      const findByAttribute = await this._models[model].find({ [attribute]: value })
      if (findByAttribute.length > 0) {
        return findByAttribute
      }
      return `no item of ${model}`
    } catch (error) {
      console.log(error)
      return `no item of ${model}`
    }
  }

  async update (model, id, data) {
    try {
      const update = await this._models[model].findByIdAndUpdate(id, data)
      if (update) {
        return `update item of ${model} successfully`
      }
      return `update item of ${model} failed`
    } catch (error) {
      console.log(error)
      return `update item of ${model} failed`
    }
  }

  async delete (model, id) {
    try {
      const deleteItem = await this._models[model].findByIdAndDelete(id)
      if (deleteItem) {
        return `delete item of ${model} successfully`
      }
      return `delete item of ${model} failed`
    } catch (error) {
      console.log(error)
      return `delete item of ${model} failed`
    }
  }

  async searchSongTitleAndArtist (title, artist) {
    try {
      const searchSong = await this._models.Songs.find({
        _title: { $regex: title, $options: 'i' },
        _artist: { $regex: artist, $options: 'i' }
      })
      if (searchSong.length > 0) {
        return searchSong
      }
      return 'no item of Songs'
    } catch (error) {
      console.log(error)
      return 'no item of Songs'
    }
  }

  async searchSongString (search) {
    try {
      const searchSong = await this._models.Songs.find({
        $or: [
          { _title: { $regex: search, $options: 'i' } },
          { _artist: { $regex: search, $options: 'i' } },
          { _album: { $regex: search, $options: 'i' } }
        ]
      })
      if (searchSong.length > 0) {
        return searchSong
      }
      return 'no item of Songs'
    } catch (error) {
      console.log(error)
      return 'no item of Songs'
    }
  }
}

const test = new DataMongo()
test.searchSongString('test1').then(res => console.log(res), err => console.log(err))
// test.searchSong('song3', 'test1').then(res => console.log(res), err => console.log(err))
// test.save('Songs', { _title: 'song3', _artist: 'test1', _album: 'test' }).then(res => console.log(res), error => console.log(error))
// test.delete('Songs', '62c718c7cdfcd499ed668b46').then(res => console.log(res), error => console.log(error))
// test.findById('Users', '62c715e2c7d1b63da0cdc363').then(res => console.log(res), err => console.log(err))
// test.update('Users', '62c715e2c7d1b63da0cdc363', { _username: 'test2' }).then(res => console.log(res), err => console.log(err))
// test.findByAttribute('Users', '_username', 'test1').then(res => console.log(res), err => console.log(err))
// test.save('Users', { _username: 'test1', _email: 'email@email.com', _password: '123' }).then(
//   result => console.log(result), error => console.log(error))

// test.all('Users').then(result => console.log(result), error => console.log(error))
// test.delete('Users', '62c7141875c6e956ec09c50c').then(result => console.log(result), error => console.log(error))