// los controller se encargar de realizar la logica del negocio

class SongController {
  constructor (serviceSong, song) {
    this._service = serviceSong
    this._entity = song
  }

  getAllSong () {
    const response = this._service.all('song')
    return response
  }

  createNewSong (song) {
    const newSong = new this._entity(song)
    const response = this._service.save('song', newSong)
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

export default SongController
