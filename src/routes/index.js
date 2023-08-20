import siteRouter from './site.js'
import animeRouter from './anime.js'

function routes(app) {
  app.use('/anime', animeRouter)
  app.use('/', siteRouter)
}

export default routes
