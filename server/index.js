import express from 'express'
import React from 'react'
import {renderToString} from 'react-dom/server'
import {matchPath} from 'react-router-dom'
import App from './App'
import routes from '../src/routes'

const app = express()
app.use(express.static('dist'))
app.use(express.static('public'))
app.get('/*', (req, res) => {
  const currentRoute = routes.find((route) => matchPath(req.url, route)) || {}
  const promise = currentRoute.fetchData ? currentRoute.fetchData() : Promise.resolve(null)

  promise.then((data) => {
    const context = {
      data
    }

    const renderedString = renderToString(<App context={context} location={req.url} />)

    function template() {
      return `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <meta http-equiv="X-UA-Compatible" content="ie=edge">
                    <link rel="icon" href="/favicon.ico" />
                    <title>React Server Side Rendering</title>
                </head>
                <body>
                    <div id="root">${renderedString}</div>
                    <script>window.__ROUTE_DATA__ = ${JSON.stringify(data)}</script>
                    <script src="/app.js"></script>
                </body>
                </html>
    
            `
    }
    res.send(template())
  })
})

const port = process.env.PORT || 4000
app.listen(port, (err) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(`> Started on port ${port}`)
})
