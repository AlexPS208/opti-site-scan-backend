import express, {Express, Request, Response } from 'express'
import bodyParser from 'body-parser'
import fetch  from 'node-fetch'
import dotenv from 'dotenv'
import cors from 'cors'
// import axios, { AxiosResponse } from 'axios'
// import { secureQueryEndpoint, smmQuery } from './src/APIEndpoints'
import { speedQueryEndpoint } from './src/APIEndpoints'
import { ParceSpeed } from './src/ResponsesParcing'
import { MyResponse } from './src/dto/CustomResponse.dto'

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
    res.status(400).send()
    return
  }

  const urlSpeed: string = speedQueryEndpoint(link, process.env.GOOGLEINSIGHTKEY || '')

  fetch(urlSpeed)
    .then<MyResponse>(res => {
      if (!res.ok) {
        throw new Error(`Ошибка запроса: ${res.status} ${res.statusText}`)
      }
      return res.json() as Promise<MyResponse>
    })
    .then((response: MyResponse) => {
      const resData: object = { speed: ParceSpeed(response) }
      res.send(JSON.stringify(resData))
    })
    .catch(error => {
      console.error('Ошибка при запросе данных:', error)
      res.status(500).send(JSON.stringify({ error: 'Ошибка при запросе данных' }))
    })
})


//
// For request only from Google PageSpeed Insight API 
//

// const fetchSpeed: Promise<MyResponse> = fetch(urlSpeed).then(res => res.json())
// const urlSpeed: string = speedQueryEndpoint(link, process.env.GOOGLEINSIGHTKEY)
  
// fetch(urlSpeed)
// .then(res => res.json())
// .then((response: MyResponse) => {
//   const resData: object = { speed: ParceSpeed(response) };
    
//   res.send(JSON.stringify(resData));
// })
// .catch(error => {
//   console.error('Ошибка при запросе данных:', error);
//   res.send(JSON.stringify({ error: 'Ошибка при запросе данных' }));
// });


//
// For 3 APIs requests (without data processing)
//

// const urlSpeed: string = speedQueryEndpoint(link, process.env.GOOGLEINSIGHTKEY)
// const urlSequre: string = secureQueryEndpoint(link, process.env.WHOISXMLKEY)
// const SMMConfig: object = smmQuery(link, process.env.SERPERKEY)

// const fetchSpeed: Promise<MyResponse> = fetch(urlSpeed).then(res => res.json())
// const fetchSequre: Promise<MyResponse> = fetch(urlSequre).then(res => res.json())
// const fetchSMM: Promise<AxiosResponse<any>> = axios(SMMConfig)

// Promise.all([fetchSpeed, fetchSequre, fetchSMM])
//   .then((responses: MyResponse[]) => {
//     const [responseSpeed, responseSequre, responseSMM] = responses

//     console.log('Response from fetchSpeed:', responseSpeed)
//     console.log('Response from fetchSequre:', responseSequre)
//     console.log('Response from fetchSMM:', responseSMM.data)

//     res.send('parameters')
//   })
//   .catch(error => {
//     console.error('Error during fetch:', error)
//   })

// })



app.listen(port, () => {
  console.log(`Server is running on http://127.0.0.1:${port}/`)
})
