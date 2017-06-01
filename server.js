const Express = require('express')
// const RateLimit = require('express-rate-limit');
// const cors = require('cors')
// const DarkSky = require('dark-sky')

const app = Express()
app.set('port', process.env.PORT || 5000)

// const limiter = new RateLimit({
//   windowMs: 10*60*1000, // 10 minutes
//   max: 1, // limit each IP to 100 requests per windowMs
//   delayMs: 0 // disable delaying - full speed until the max limit is reached
// })

// app.use(limiter);
// app.use(cors())

// Home
app.get('/', function (req, res) {
  res.send(`<h1 style="color: gray;">Hello from Weather Api!</h1><h2 style="color: cornflowerblue;">Current time is: ${ new Date().toLocaleString() }</h2>`)
})

// DarkSky API
// const forecast = new DarkSky(keys.darksky)

// app.get('/weather/v1/json', function (req, res) {
//   let lat = req.param('lat')
//   let lon = req.param('lon')
//   let units = req.param('units')

//   forecast
//     .latitude(lat)
//     .longitude(lon)
//     .units(units)
//     .language('en')
//     .exclude('minutely,hourly,flags')
//     .get()
//     .then(function (response) {
//       res.send(response)
//     })
//     .catch(function (error) {
//       res.send(error)
//     })

//   console.log(req.method + ': /weather/v1/'+lat+'/'+lon+'/'+units)
// })

app.get('/headers', function(req,res){
  res.set('Content-Type','text/plain');
  var s = '';
  for(var name in req.headers) s += name + ': ' + req.headers[name] + '\n';
    res.send(s);
});

app.listen(app.get('port'), () => console.log(`Server is listening at port ${app.get('port')}`))
