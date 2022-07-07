class SongRouter {
  constructor (router, controller, response, httpCode) {
    this._router = router() // instancia del enrutador de express
    this._ctrl = controller
    this._response = response
    this._httpCode = httpCode
    this.registerRoutes()
  }

  registerRoutes () {
    this._router.post('/', this.handlePostSong.bind(this))
    this._router.get('/', this.handleGetSong.bind(this))
    this._router.delete('/:id', this.handleDeleteSong.bind(this))
    this._router.put('/:id', this.handlePutSong.bind(this))
    // artist
    this._router.post('/artist', this.handlePostArtist.bind(this))
    // album
    this._router.post('/album', this.handlePostAlbum.bind(this))
  }

  async handlePostSong (req, res) {
    try {
      const result = await this._ctrl.createNewSong(req.body)
      this._response.success(req, res, result, this._httpCode.CREATED)
    } catch (error) {
      this._response.error(req, res, error, this._httpCode.BAD_REQUEST)
    }
  }

  async handleGetSong (req, res) {
    try {
      if (Object.keys(req.query).length > 0) {
        const result = await this._ctrl.getSongByQuery(req.query)
        this._response.success(req, res, result, this._httpCode.ok)
      } else {
        const result = await this._ctrl.getAllSongs()
        this._response.success(req, res, result, this._httpCode.ok)
      }
    } catch (error) {
      this._response.error(req, res, error, this._httpCode.internal_server_error)
    }
  }

  async handleDeleteSong (req, res) {
    try {
      const result = await this._ctrl.deleteSong(req.params.id)
      this._response.success(req, res, result, this._httpCode.ok)
    } catch (error) {
      this._response.error(req, res, error, this._httpCode.internal_server_error)
    }
  }

  async handlePutSong (req, res) {
    try {
      const result = await this._ctrl.updateSong(req.paramas.id, req.body)
      this._response.success(req, res, result, this._httpCode.ok)
    } catch (error) {
      this._response.error(req, res, error, this._httpCode.internal_server_error)
    }
  }

  async handlePostArtist (req, res) {
    try {
      const result = await this._ctrl.createNewArtist(req.body)
      this._response.success(req, res, result, this._httpCode.CREATED)
    } catch (error) {
      this._response.error(req, res, error, this._httpCode.BAD_REQUEST)
    }
  }

  async handlePostAlbum (req, res) {
    try {
      const result = await this._ctrl.createNewAlbum(req.body)
      this._response.success(req, res, result, this._httpCode.CREATED)
    } catch (error) {
      this._response.error(req, res, error, this._httpCode.BAD_REQUEST)
    }
  }
}

export default SongRouter
