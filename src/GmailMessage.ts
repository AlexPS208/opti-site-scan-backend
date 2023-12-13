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
          background-color: #4287f5;
          background-image: url("https://opti-scan.s3.us-east-1.amazonaws.com/background-small.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDGV1LWNlbnRyYWwtMSJHMEUCIHa9NonJ5rsPsRVqdsV9A5QqvXHjYd%2B%2B4PDq5fY33GvUAiEA2orsNvbsHnkoMPGx17mmhQoDCSqKhJdOnmU8Z%2FTC900q6AIISBAAGgwxMzU3NzYwOTk5MjgiDKTclvqqk7axdynVxSrFAgsQCtjZ7i19tSp5MOgX8f7GD8azEhIFgI3UXOyMkDvC9noQ21HGxJ2DxkS6V3HDBkrxSkr3OnB9IQQNSyxvORVuVsndV%2Bqd%2B5sdcFY%2B%2BA4eICfxu%2FBXNLWzzLJG6%2F0dUmDCut60JVkP0UwvO%2F47Yc4TY%2FgIW9qHTQPANO9OVt86gnPAnoUvet6Cog4ZGorcou%2B24knnLIgJ9iwry%2BgZYnsWISEodq3lZ1X6RqjZfFGKq4R5QsGQVfXO1Mo%2Fy%2Bmew05o6hqQkM4xZWWDMBKKQE37TqOHX4bQ49BuP7MNq7o6rpK%2FWpaI%2BBvtmCeqVYtWhgTMLM1gT9jIm6ImvgixAJWBMd7cVhp7p4yk3O0XCfztUzRCmLHfS8HjEkTk3KMIDxJpv77hFiXAZiESnJOSLBbUu7xQJB9%2BUX7vFHPpej%2BHnoh7cEsw2f3mqwY6swJssvcN%2FH2VbpmpE7ZPLbGE4RoufIomQtvo2URl9cYxv8FDEYP3d0IlldLmP0xiMYhJN%2BFib1m%2FLs2LX93k30lyqaZkPaO7q8u5X3eVdqnf0HXtA0cSKV8gPTb5ITsk5v5ZcjzjJpTY2eYTL4QlrM%2BHpXl5hGI9xCVdNolwY0664puWgDbS7pjHZm3SXw%2Bq8Cd1HcbP2ZaNFzakr%2BVujvthQPrxLq8bM6ImE6BrHyiBWSa7BlOE2hU4YfYfqgXQnZDMd%2Fi%2BSki5lN9yXP0a0ZYVnbufWHzyLhzRFuqI%2F84IW5O9xhlHQKP6%2BWZTrPAMFu8V0UXU5DMK52wx9rYerLy%2FZMzIH4l6f%2F8V%2FhUdNIfHhVje%2FXpS5oHwYP3GPwipHU68pMN5vIfBFm6lL%2B88uzHoUHVz&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231213T145350Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAR7HHC3ZMFEZMF5GN%2F20231213%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=7c698ddc83bb83bffb09cd88bc772fbbab865a034aa42a49d317e109607af2f7");
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
          font-size: 18px;
          line-height: 1.5;
          color: #FFF;
          border-radius: 5px;
          text-align: left;
          font-family: 'Trebuchet MS', Helvetica, sans-serif;
      }
      .header {
          font-size: 21px;
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
              font-family: 'Trebuchet MS', Helvetica, sans-serif;
          }
          .header {
              font-size: 18px;
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
          <b>Wellcome, ${name ? name : 'user'}!</b>
      </div>

      <div class="body-text">
          <p>
              You have generated an analytics file using the <a href="https://opti-site-scan.vercel.app/login" class="link"><b>"Opti Scan"</b></a> application.
          </p>
          
          <p>
              Please read this file below.
          </p><br>
          <p>
              Thank you for using our application!
          </p>
      </div>
  </div>
  </body>
  </html>
  `
}
