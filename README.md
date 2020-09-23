### Why?
If you going to build weather app or doing it right now hundred percent you encountered (or will do it) an issue. The issue 
is `No 'Access-Control-Allow-Origin' header is present on the requested resource` message in console when you try to fetch weather data from 
dark sky api. It turns out weather provider have disabled [cross-origin resource sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS)
on their servers. Actually you can read about it [here](https://darksky.net/dev/docs/faq#cross-origin).  

Below is excerption from [faq section](https://darksky.net/dev/docs/faq#cross-origin)
> To prevent API key abuse, you should set up a proxy server to make calls to our API behind the scenes. 
> Then you can provide forecasts to your clients without exposing your API key.

### How to use?
1. fork
2. `git clone`
3. `yarn` or `npm install`
4. get an api key at https://darksky.net/dev/
5. rename `.env.exampe` to `.env` and assign you api key as value to `API_KEY`. 
6. start server with `yarn start`
7. [![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

The last step only makes sense if you going to build weather app and put it to the web.

### What about frontend part?
I have built very simple weather [app](https://github.com/devellopah/vue-weather).
Feel free to `git clone` and go through it if you are struggle to build one or maybe just curious.
