import express from 'express'
import SongRouter from './Router.js'
import SongController from './Controller.js'
import { response } from '../../response/response.js'
import { HttpCode } from '../../response/httpcode.js'
import { DataJson } from '../../store/DataJson.js'
import Song from '../../entity/Song.js'

export const songMudule = () => {
  const servicesSong = new DataJson()
  const songController = new SongController(servicesSong, Song)
  const songRouter = new SongRouter(express.Router, songController, response, HttpCode)
  return songRouter._router
}
