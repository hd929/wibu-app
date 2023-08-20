import express from 'express'
import animeController from '../app/controllers/AnimeController.js'

const Router = express.Router()

Router.post('/store', animeController.store)
Router.get('/add', animeController.add)
Router.get('/:slug', animeController.slug)

export default Router
