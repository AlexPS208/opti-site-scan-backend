import express, {Express, Request, Response } from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import cors from 'cors'
import { ApiResponse, UseGoogleAPI } from './src/controllers/googleAPI'
import multer, { Multer, StorageEngine } from 'multer'
import nodemailer, { Transporter } from 'nodemailer'

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


app.get('/', (req: Request, res: Response) => {
  res.status(204).send()
})

app.post('/', (req: Request, res: Response) => {
  const response: Promise<ApiResponse> = UseGoogleAPI(req)
  response.then( response => 
    res.status(response.status).send(response.response)
  )
})

app.post('/sendpdf/', upload.single('file'), (req: Request, res: Response) => {
  const pdfBuffer: Buffer = req.file!.buffer

  const name: string | undefined = req.body.name
  const gmail: string | undefined = req.body.gmail

  if(!gmail) {
    res.status(500).send('No gmail in request')
  }

  // Send dudes
  const mailOptions: nodemailer.SendMailOptions = {
    from: process.env.GMAILNAME,
    to: gmail, 
    subject: 'Site Speed Analitics',
    html: `<span style="font-size:18px; color: #000">
      Hello, ${name? name : 'user'}, there's your speed analitics.
    </span><br>
    <span style="color: #000">
      Message generated automatically. Please do not reply to this letter.
    </span>`,
    attachments: [
      {
        filename: 'Speed Analytics.pdf',
        content: pdfBuffer
      },
    ],
  }

  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      return res.status(500).send(error.toString())
    }
    res.status(204).send()
  })
})


app.listen(port, () => {
  console.log('Server is running')
})
