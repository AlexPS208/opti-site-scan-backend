import { Request } from 'express'
import { ParseSpeed } from '../ResponsesParcing'
import axios from 'axios'
import { speedQueryEndpoint } from '../APIEndpoints'

export type ApiResponse = {
    status: number;
    response?: string;
    err?: string;
  };


export const UseGoogleAPI = (req: Request): Promise<ApiResponse> => {
  const link: string | undefined = req.body.link

  if (!link) {
    return Promise.resolve({
      status: 400,
      response: undefined,
      err: 'Link missing'
    })
  }

  const urlSpeed: string = speedQueryEndpoint(link, process.env.GOOGLEINSIGHTKEY || '')

  return axios
    .get(urlSpeed)
    .then((response) => {
      if (!response.data) {
        throw new Error(`!!! The request failed: ${response.status} ${response.statusText}`)
      }
      const resData = { speed: ParseSpeed(response.data) }

      return {
        status: 200,
        response: JSON.stringify(resData),
        err: undefined
      }
    })
    .catch((error: Error) => {
      console.error('!!! Error when requesting data:', error)

      return Promise.resolve({
        status: 500,
        response: undefined,
        err: error.message
      })
    })
}


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
