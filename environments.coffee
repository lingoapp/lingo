module.exports =

  production:
    port: process.env.PORT or 5000

    twitter:
      consumer_key:         process.env.TW_CONSUMER_KEY
      consumer_secret:      process.env.TW_CONSUMER_SECRET
      access_token_key:     process.env.TW_TOKEN
      access_token_secret:  process.env.TW_TOKEN_SECRET

    redis:
      host: 'localhost'
      port: 6379

    cookies:
      domain: '.lingoapp.tk'
      secure: true

  development:
    port: process.env.PORT or 5000

    twitter:
      consumer_key:         process.env.TW_CONSUMER_KEY
      consumer_secret:      process.env.TW_CONSUMER_SECRET
      access_token_key:     process.env.TW_TOKEN
      access_token_secret:  process.env.TW_TOKEN_SECRET

    redis:
      host: 'localhost'
      port: 6379

    cookies:
      domain: '.lingoapp.tk'
      secure: false

