import { expect } from 'chai'
import { describe, it } from 'mocha'
import Song from '../../entity/Song.js'

// escribiendo un test
describe('testing Song Class', () => {
// setup class and instance
  const song = new Song({
    title: 'title',
    uri: 'uri',
    duration: 'duration',
    image: 'image',
    idArtist: 'idArtist',
    idGenre: 'idGenre'
  })
  it('should is not null', () => {
    expect(song).to.not.equal(null)
  })
  it('should have a title', () => {
    expect(song._title).to.equal('title')
  })
  it('should return a number', () => {
    const result = song.returnNumber()
    expect(result).to.equal(5)
  })
})
