import express from 'express'
import SongRouter from './Router.js'
import SongController from './Controller.js'
import { response } from '../../response/response.js'
import { HttpCode } from '../../response/httpcode.js'
import Song from '../../entity/Song.js'
import { config } from '../../config/defaults.js'
import { DataMongo } from '../../store/DataMongo.js'

export const songMudule = () => {
  const servicesSong = new DataMongo()
  const songController = new SongController(servicesSong, Song, config.table)
  const songRouter = new SongRouter(express.Router, songController, response, HttpCode)
  return songRouter._router
}
