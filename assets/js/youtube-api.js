import axios from 'axios'

const YouTubeAPI =  axios.create({
	baseURL: `https://www.googleapis.com/youtube/v3/`
})

YouTubeAPI.defaults.params = {
	'key' : 'AIzaSyCuv_16onZRx3qHDStC-FUp__A6si-fStw',
	'part': 'snippet'
}

export default YouTubeAPI