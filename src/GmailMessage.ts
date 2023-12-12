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
          background-image: url("https://opti-scan.s3.us-east-1.amazonaws.com/background-small.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aDGV1LWNlbnRyYWwtMSJIMEYCIQDyV9f5hCO7fB7Ym4Uvs1MxYGCrjVn2R5dhouNDtai6NwIhAN42G6l19bUGgmwH4Yv1AzH9Fp5j4Lv5WO%2BzfxiopWePKvECCKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTM1Nzc2MDk5OTI4IgyJ8ay91HuBs17QYrAqxQKVn7hf%2FDjEbtDxu1uUOpehrOFCHJMZAxTmqVMmzn0EL81jJCQw9kTHEyXiaEGr82yQ2ROwjsD3kebsjvKfraQbzVs%2BcKeVGHep4xKjH9oVdC5n1OCsoEYYgb28IuZu%2FzUaF0MT69%2FewhfHsoROBhcuVCkST6RA%2BK0uChlx1jhYrtqEJqrr6LMj%2FAxd1j4YZob3ofWdI0jFo2660Ezw4%2BmFoKTuqmiwz6CyK4jTPP0EmLH5GuSa2e0hvZhPsPiBdg1Ii9mGH0H%2BOskq8mwIfGBuf0ji9GfilM868ncq41WaIyEg7QpRSRP4GRNQ9q7PMp53F%2BkygKFt9%2FB4hUcFCh63NhfZRHAhZjqU2DQjRnaXKdrQiRGa4K%2B27bXJAUwX44AMDs7aTgl%2B9Tkgtf7KZR19aQo4ZaDt74ZrJiiwSVnpCK8AA2JjMOi2x6sGOrICTrGQdp9KWmfUM1uV8jzbMMNrsJnOqH59LqcW8PTPDDoK%2Fmmd8dhf0Mq%2B5N6ev%2FEhpcsIo45wlnZIOMrTXxUaLtCOJyZX6MNcyiuls04iWWXMEOT4KR0c00LbxJr0aO%2FzPvEAFVEhedkalMnVzFEwJQXeyNWjXMHyUptb6mRZOppnMOz1ef%2FT9D6RkVCMLIYi44ZZbba0R4r0%2Fnk7XwXpUXc9%2FtxMi89MTzOzwQpqPpe2OVQRTtuuZAnDJ%2BoUnFNtrpu%2FDOQ9ZKpqm31L5dubMn4NDdH4Yon1ZhHje5u2n5XXylQxzz0AFqEcJh%2B9BtKevNc7U38nZORaQotJ9%2FwSc5U9i3O1lQZ3cKWngx2w23UQXNj7n5bgzvgArOB3zUGnmJfE5A7il%2Fy7u5XFI7Tw3LmS&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231207T151515Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAR7HHC3ZMKY3P6XHL%2F20231207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=da960c8cb0bc5a8ab323e94a92ac02ce0bb341d12ff6a1dfe81af74dbadb1d7d");
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
