import { Request } from 'express'
import nodemailer, {Transporter} from 'nodemailer'
import { messageHtml } from '../GmailMessage'
import { ApiResponse } from '../dto/ApiResponse.dto'

export const SendStatistic = async (transporter: Transporter, req: Request, buffer: Buffer): Promise<ApiResponse> => {
  const name: string | undefined = req.body.name
  const gmail: string | undefined = req.body.gmail
  const link: string | undefined = req.body.link
  
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
    html: messageHtml(name? name:undefined, link? link:undefined),
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
