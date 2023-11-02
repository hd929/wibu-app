import Anime from '../models/Anime.js'
import { mongooseToObject } from '../../utils/mongoose.js'

class AnimeController {
  slug(req, res) {
    const slug = req.params.slug

    Anime.findOne({ slug }).then((anime) => {
      res.render('anime/slug', { anime: mongooseToObject(anime) })
    })
  }

  add(req, res) {
    res.render('anime/add')
  }

  store(req, res) {
    // const anime = new Anime(req.body)
    // anime.save()
    console.log(req.body.image)
  }
}

export default new AnimeController()
