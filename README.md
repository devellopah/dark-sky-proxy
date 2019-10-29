## WHY?
If you going to build weather app or doing it right now hundred percent you encountered (or will do it) an issue. The issue 
is `No 'Access-Control-Allow-Origin' header is present on the requested resource` message in console when you try to fetch weather data from 
dark sky api. It turns out weather provider have disabled [cross-origin resource sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS)
on their servers. Actually you can read about it [here](https://darksky.net/dev/docs/faq#cross-origin).  

Below is excerption from [faq section](https://darksky.net/dev/docs/faq#cross-origin)
> To prevent API key abuse, you should set up a proxy server to make calls to our API behind the scenes. 
> Then you can provide forecasts to your clients without exposing your API key.

## HOW TO USE
1. fork it
2. `git clone` to your machine
3. `yarn install`
4. register at https://darksky.net/dev/ to get you api key
5. change `.env.exampe` to `.env` and put you api key as value to `API_KEY`. 
6. run it locally with `yarn start` before your weather app
7. deploy your proxy-server to [heroku](https://heroku.com) or 
[now](https://zeit.co/now) when your weather app is ready for production
(you need to run proxy-server live in internet in order for your weather app to work in production)
8. make calls through the proxy with the format: https://YOUR_PROXY_NAME.herokuapp.com/api/weather?latitude=VALUE&longitude=VALUE&units=uk2

