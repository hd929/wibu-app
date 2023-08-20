import express from 'express'
import handlebars from 'express-handlebars'
import('tailwindcss').Config
import dotenv from 'dotenv'

import routes from './routes/index.js'
import db from './app/config/db/index.js'

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

db.connect()

const hbs = handlebars.create({
  helpers: {
    truncate: function (str, maxLen) {
      if (str.length > maxLen) {
        return str.slice(0, maxLen) + '...'
      }
      return str
    },
  },
  extname: '.hbs',
})

app.engine('.hbs', hbs.engine)
app.set('view engine', '.hbs')
app.set('views', './src/resources/views')

app.use(express.static('./src/public'))
app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ extended: true, limit: '50mb' }))

routes(app)

app.listen(port, () => console.log(`Listening on port ${port}`))
