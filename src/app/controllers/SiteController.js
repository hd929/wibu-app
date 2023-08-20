import Anime from '../models/Anime.js'

import { mutipleMongooseToObject } from '../../utils/mongoose.js'

class SiteController {
  home(req, res) {
    Anime.find({}).then((animes) => {
      res.render('home', { animes: mutipleMongooseToObject(animes) })
    })
  }
}

export default new SiteController()
