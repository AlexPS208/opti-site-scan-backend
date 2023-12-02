import express, {Express, Request, Response } from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import cors from 'cors'
import { ApiResponse, UseGoogleAPI } from './src/controllers/googleAPI'

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
  res.status(204).send()
})

app.post('/', (req: Request, res: Response) => {
  const response: Promise<ApiResponse> = UseGoogleAPI(req)
  response.then( response => 
    res.status(response.status).send(response.response)
  )
})


app.listen(port, () => {
  console.log('Server is running')
})
