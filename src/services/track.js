import previfyMusicService from './prevify-music'

const trackService = {}

trackService.search = function (q) {
  const type = 'track'
  return previfyMusicService.get('/search', {
    params: { q, type }
  })
    .then(function (res) {
      return res.data
    })
}
export default trackService
