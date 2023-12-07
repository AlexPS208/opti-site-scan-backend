export const messageHtml = (name?: string): string => {
  return `
  <!DOCTYPE html>
  <html>
  <head>
  <style>
      .container {
          max-width: 90%;
          margin: 0 auto;
          padding: 15px;
          background-color: #0186C9;
          font-size: 18px;
          line-height: 1.5;
          color: #FFF;
          border-radius: 5px;
          text-align: left;
      }
      .header {
          font-size: 22px;
          text-align: center;
          margin-bottom: 25px;
      }
      .body-text {
          margin: 0 0 10px;
      }
      .body-text a {
          color: #FFF;
          text-decoration: underline;
      }
      @media only screen and (max-width: 600px) {
          .container {
              width: 100% !important;
              padding: 10px;
          }
          .header {
              font-size: 20px;
          }
          .body-text {
              font-size: 16px;
          }
      }
  </style>
  </head>
  <body>
  <div class="container">

      <div class="header">
          <b>Hello, ${name ? name : 'user'}!</b>
      </div>

      <div class="body-text">
          <p>
              You have generated an analytics file using the <a href="https://opti-site-scan.vercel.app/login" class="link"><b>"Opti Scan"</b></a> application.
          </p>
          
          <p>
              Please read this file below
          </p>
          <p>
              Thank you for using our application!
          </p>
      </div>
  </div>
  </body>
  </html>
  `
}
