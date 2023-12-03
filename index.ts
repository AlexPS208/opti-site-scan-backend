import express, {Express, Request, Response } from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import cors from 'cors'
import { UseGoogleAPI } from './src/controllers/googleAPI'
import multer, { Multer, StorageEngine } from 'multer'
import nodemailer, { Transporter } from 'nodemailer'
import { SendStatistic } from './src/controllers/pdfSender'
import { ApiResponse } from './src/dto/ApiResponse.dto'

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
  methods: ['POST']
}))

// Setting storage for multer
const storage: StorageEngine = multer.memoryStorage()
const upload: Multer = multer({ storage: storage })

// Настройка Nodemailer
const transporter: Transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAILNAME,
    pass: process.env.GMAILKEY
  },
})


// Обращение к Google Page Speed Insight API
app.post('/', (req: Request, res: Response) => {
  const response: Promise<ApiResponse> = UseGoogleAPI(req)
  response.then( response => 
    res.status(response.status).send(response.response)
  )
})

// Отправка письма со статистикой на электронную почту
app.post('/sendpdf/', upload.single('file'), (req: Request, res: Response) => {
  const response = SendStatistic(transporter, req, req.file!.buffer)
  response.then( response => 
    res.status(response.status).send()
  )
})


app.listen(port, () => {
  console.log('Server is running')
})
