class SongController {
  constructor (serviceSong, song, table) {
    this._service = serviceSong
    this._entity = song
    this._table = table
  }

  async getAllSongs () {
    try {
      const response = await this._service.All(this._table.song)
      return response
    } catch (error) {
      return new Error('Error al obtener las canciones')
    }
  }

  async getSongByQuery (query) {
    try {
      const response = await this._service.getByQuery(this._table.song, query)
      return response
    } catch (error) {
      return new Error('Error al obtener la cancion')
    }
  }

  async createNewSong (song) {
    try {
      const newSong = new this._entity(song)
      const response = await this._service.save(this._table.song, newSong)
      return response
    } catch (error) {
      return new Error('Error al crear la cancion')
    }
  }

  async updateSong (id, data) {
    try {
      const response = await this._service.update(this._table.song, id, data)
      return response
    } catch (error) {
      return new Error('Error al actualizar la cancion')
    }
  }

  async deleteSong (id) {
    try {
      const response = await this._service.delete(this._table.song, id)
      return response
    } catch (error) {
      return new Error('Error al eliminar la cancion')
    }
  }

  async createNewArtist (artist) {
    try {
      const response = await this._service.save(this._table.artist, artist)
      return response
    } catch (error) {
      return new Error('Error al crear el artista')
    }
  }

  async createNewAlbum (album) {
    try {
      const response = await this._service.save(this._table.album, album)
      return response
    } catch (error) {
      return new Error('Error al crear el album')
    }
  }
}

export default SongController
