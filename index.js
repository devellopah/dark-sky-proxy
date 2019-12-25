// load enviroment variables from .env file
require('dotenv').config()

const path = require('path')

const express = require('express')
const favicon = require('serve-favicon')
const cors = require('cors')

const DarkSky = require('dark-sky')
const RateLimit = require('express-rate-limit');

const app = express()

app.use(cors())
app.use(favicon(path.join(process.cwd(), 'favicon.ico')))

app.set('port', process.env.PORT || 3000)

app.enable('trust proxy')

const limit = 15; // 15 minutes
// the weather doesn't change too often
const limiter = new RateLimit({
  windowMs: limit * 60 * 1000, // 15 miinutes
  max: 1, // limit each IP to 1 requests per windowMs
  onLimitReached: function(req, res) {
    const d = new Date()
    const tryAfterDate = new Date(d.setMinutes(d.getMinutes() + limit))
    return res.status(429).json({
      message: "Weather doesn't change so fast, please try again after <span style='font-weight: 700; color: #f8bb86; font-style: italic;'>" + tryAfterDate.toLocaleTimeString() + "</span>.",
      isLimitJustReached: true,
    });
  }
})

// Home
app.get('/', (req, res) => {
  res.send(`<div>Current time is: ${ new Date().toLocaleTimeString() }</div>`)
})

// DarkSky API
const darksky = new DarkSky(process.env.API_KEY)

app.use('/api/weather', limiter, async (req, res, next) => {
  try {
    const { latitude, longitude, units } = req.query
    const forecast = await darksky
      .options({
        latitude,
        longitude,
        units,
        language: 'en',
        exclude: ['minutely','hourly','daily','alerts','flags'],
      })
      .get()

    return res.status(200).json(forecast)

  } catch (err) {
    next(err)
  }
})

app.listen(
  app.get('port'),
  () => console.log(`Server is listening at port ${app.get('port')}`)
)
