import { Request } from 'express'
import nodemailer, {Transporter} from 'nodemailer'
import { ApiResponse } from '../dto/ApiResponse.dto'

export const SendStatistic = async (transporter: Transporter, req: Request, buffer: Buffer): Promise<ApiResponse> => {
  const name: string | undefined = req.body.name
  const gmail: string | undefined = req.body.gmail
  const link: string | undefined = req.body.link

  console.log(name)
  console.log(gmail)
  console.log(link)
  console.log(buffer)
  
  if(!gmail) {
    return {
      status: 500,
      response: undefined,
      err: 'No gmail in request'
    }
  }
  
  // config mail
  const mailOptions: nodemailer.SendMailOptions = {
    from: process.env.GMAILNAME,
    to: gmail, 
    subject: 'Site Speed Analitics',
    html: `<span style="font-size:18px; color: #000">
        Hello, ${name? name : 'user'}, there's your speed analitics${link? ' for '+link : ''}.
      </span><br>
      <span style="color: #000">
        Message generated automatically. Please do not reply to this letter.
      </span>`,
    attachments: [
      {
        filename: `Speed Analytics${link? ' - '+link : ''}.pdf`,
        content: buffer
      },
    ],
  }
  
  // send mail
  return new Promise<ApiResponse>((resolve, reject) => {
    transporter.sendMail(mailOptions, (error) => {
      if (error) {
        reject({
          status: 500,
          response: undefined,
          err: error.toString()
        })
      } else {
        resolve({
          status: 204,
          response: undefined,
          err: undefined
        })
      }
    })
  })
}
