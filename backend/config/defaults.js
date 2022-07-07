import dotenv from 'dotenv'
dotenv.config()

export const config = {
  api: {
    port: process.env.API_PORT || 3000,
    hostname: process.env.HOSTNAME || 'localhost',
    name: process.env.NAMEAPP || 'app'
  },
  db: {
    host: process.env.DB_HOST || 'localhost'
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'secret'
  },
  mongo: {
    uri: process.env.MONGO_URI
  },
  table: {
    user: 'Users',
    song: 'Songs',
    auth: 'Auth',
    playlist: 'Playlists',
    artist: 'Artists',
    album: 'Albums'
  }
}
