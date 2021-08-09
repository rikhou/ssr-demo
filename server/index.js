import express from 'express'
import React from 'react'
import {renderToString} from 'react-dom/server'
import App from '../src/App'

const app = express()
app.use(express.static('dist'))

app.get('/*', (req, res) => {
  const renderedString = renderToString(<App />)

  function template() {
    return `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <title>React Server Side Rendering</title>
            </head>
            <body>
                <div id="root">${renderedString}</div>
                <script src="/app.js"></script>
            </body>
            </html>

        `
  }

  res.send(template())
})

const port = process.env.PORT || 4000
app.listen(port, (err) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(`> Started on port ${port}`)
})
