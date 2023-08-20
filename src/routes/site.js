import express from 'express'
import siteController from '../app/controllers/SiteController.js'

const Router = express.Router()

Router.get('/', siteController.home)

export default Router
