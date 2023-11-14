import express, {Express, Request, Response } from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

// Create app
const app: Express = express()
const port: number | undefined = Number(process.env.PORT)

// Setting body parser
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())
app.use(bodyParser.raw())

// Setting CORS
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST']
}))


app.get('/', (req: Request, res: Response) => {
  res.status(201).send()
})


app.post('/', (req: Request, res: Response) => {
  const link: string | undefined = req.body.link

  if (!link) {
    res.status(300).send()
    return
  }

  const url: string = setUpQuery(link)

  fetch(url)
    .then(response => response.json())
    .then(json => {
      res.send(json.id)
    })

})


app.listen(port, () => {
  console.log(`Server is running on http://127.0.0.1:${port}/`)
})

function setUpQuery(link: string): string {
  const api = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed'

  const parameters = {
    url: encodeURIComponent(link)
  }

  let query = `${api}?`
  query += `url=${parameters.url}`

  return query
}
