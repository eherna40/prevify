import trae from 'trae'
import configService from './config'

const previfyMusicService = trae.create({
  baseUrl: configService.apiUrl
})

export default previfyMusicService
